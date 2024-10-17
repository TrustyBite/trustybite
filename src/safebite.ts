import { NearBindgen, near, call, view } from 'near-sdk-js';

@NearBindgen({})
class SafeBite {
  // Data structure to store historical values with timestamps and owner information
  restaurants: Record<string, { owner: string, cleanlinessData: Array<{ timestamp: number, value: number }>, freshnessData: Array<{ timestamp: number, value: number }> }> = {};

  // Register a new restaurant with the caller as the owner
  @call({})
  register_restaurant({ restaurant_id }: { restaurant_id: string }): void {
    if (this.restaurants[restaurant_id]) {
      near.log(`Restaurant ${restaurant_id} is already registered.`);
      return;
    }
    // Register the restaurant with the owner as the caller of the method
    const owner = near.predecessorAccountId();
    this.restaurants[restaurant_id] = {
      owner,
      cleanlinessData: [],
      freshnessData: []
    };
    near.log(`Restaurant ${restaurant_id} has been registered with owner ${owner}.`);
  }

  // Add new cleanliness and freshness values each minute, restricted to the restaurant owner
  @call({})
  add_factors({ restaurant_id, cleanliness_factor, freshness_factor }: { restaurant_id: string, cleanliness_factor: number, freshness_factor: number }): void {
    const restaurant = this.restaurants[restaurant_id];

    // Ensure the restaurant is registered
    if (!restaurant) {
      near.log(`Restaurant ${restaurant_id} is not registered.`);
      return;
    }

    // Ensure the caller is the owner of the restaurant
    const caller = near.predecessorAccountId();
    if (restaurant.owner !== caller) {
      near.log(`Caller ${caller} is not the owner of restaurant ${restaurant_id}.`);
      return;
    }

    const timestamp = Date.now(); // Get current time in milliseconds

    // Add new data points to the arrays
    restaurant.cleanlinessData.push({ timestamp, value: cleanliness_factor });
    restaurant.freshnessData.push({ timestamp, value: freshness_factor });

    near.log(`Factors added for ${restaurant_id} by owner ${caller} at timestamp ${timestamp}: Cleanliness - ${cleanliness_factor}, Freshness - ${freshness_factor}`);
  }

  // Calculate average for a given time period
  calculate_average(data: Array<{ timestamp: number, value: number }>, period: number): number {
    const now = Date.now();
    const filteredData = data.filter(entry => now - entry.timestamp <= period);
    if (filteredData.length === 0) return 0;
    const sum = filteredData.reduce((acc, entry) => acc + entry.value, 0);
    return sum / filteredData.length;
  }

  // View method to get averages for last day, week, and month
  @view({})
  get_average_factors({ restaurant_id }: { restaurant_id: string }): { last_day: { cleanliness: number, freshness: number }, last_week: { cleanliness: number, freshness: number }, last_month: { cleanliness: number, freshness: number } } | null {
    const restaurant = this.restaurants[restaurant_id];

    if (!restaurant) {
      near.log(`Restaurant ${restaurant_id} is not registered.`);
      return null;
    }

    const lastDay = 24 * 60 * 60 * 1000;
    const lastWeek = 7 * lastDay;
    const lastMonth = 30 * lastDay;

    const cleanlinessLastDay = this.calculate_average(restaurant.cleanlinessData, lastDay);
    const cleanlinessLastWeek = this.calculate_average(restaurant.cleanlinessData, lastWeek);
    const cleanlinessLastMonth = this.calculate_average(restaurant.cleanlinessData, lastMonth);

    const freshnessLastDay = this.calculate_average(restaurant.freshnessData, lastDay);
    const freshnessLastWeek = this.calculate_average(restaurant.freshnessData, lastWeek);
    const freshnessLastMonth = this.calculate_average(restaurant.freshnessData, lastMonth);

    return {
      last_day: { cleanliness: cleanlinessLastDay, freshness: freshnessLastDay },
      last_week: { cleanliness: cleanlinessLastWeek, freshness: freshnessLastWeek },
      last_month: { cleanliness: cleanlinessLastMonth, freshness: freshnessLastMonth }
    };
  }

  // List all registered restaurants with their most recent cleanliness and freshness factors
  @view({})
  list_restaurants(): Array<{ restaurant_id: string, averages: { last_day: { cleanliness: number, freshness: number }, last_week: { cleanliness: number, freshness: number }, last_month: { cleanliness: number, freshness: number } } }> {
    return Object.keys(this.restaurants).map(restaurant_id => {
      const restaurant = this.restaurants[restaurant_id];
  
      // Calculate averages for the last day, week, and month
      const lastDay = 24 * 60 * 60 * 1000;
      const lastWeek = 7 * lastDay;
      const lastMonth = 30 * lastDay;
  
      const cleanlinessLastDay = this.calculate_average(restaurant.cleanlinessData, lastDay);
      const cleanlinessLastWeek = this.calculate_average(restaurant.cleanlinessData, lastWeek);
      const cleanlinessLastMonth = this.calculate_average(restaurant.cleanlinessData, lastMonth);
  
      const freshnessLastDay = this.calculate_average(restaurant.freshnessData, lastDay);
      const freshnessLastWeek = this.calculate_average(restaurant.freshnessData, lastWeek);
      const freshnessLastMonth = this.calculate_average(restaurant.freshnessData, lastMonth);
  
      return {
        restaurant_id,
        averages: {
          last_day: { cleanliness: cleanlinessLastDay, freshness: freshnessLastDay },
          last_week: { cleanliness: cleanlinessLastWeek, freshness: freshnessLastWeek },
          last_month: { cleanliness: cleanlinessLastMonth, freshness: freshnessLastMonth }
        }
      };
    });
  }
}