// utils/accountActions.js
"use client";
import { relayTransaction, createAccount } from "@near-relay/client";
import { actionCreators } from "@near-js/transactions";

// Constants for configuration
const CONTRACT_ADDRESS = "trustybite.testnet";
const RELAY_URL = "/api/relayer";
const CREATE_ACCOUNT_URL = "/api/relayer/create-account";
const NETWORK = "testnet";

/**
 * Creates an account using the NEAR relayer service.
 * 
 * @param {string} accountId - The account ID to create
 * @returns {Promise<string>} - A Promise that resolves to the transaction receipt as a string
 */
export async function handleCreateAccount(accountId) {
  try {
    const receipt = await createAccount(
      CREATE_ACCOUNT_URL,
      accountId,
      { password: "lfg" }
    );
    return JSON.stringify(receipt.transaction);
  } catch (error) {
    console.error("Error creating account using relayer:", error);
    throw error;
  }
}

/**
 * Relays a transaction to register a restaurant using the NEAR relayer service.
 * 
 * @returns {Promise<string>} - A Promise that resolves to the transaction receipt as a string
 */
export async function handleRelay() {
  try {
    const action = actionCreators.functionCall(
      "register_restaurant",
      { restaurant_id: "Vegan Delights from relayer" },
      BigInt(70000000000000), // Gas amount
      BigInt(0)               // Attached deposit
    );

    const receipt = await relayTransaction(
      action,
      CONTRACT_ADDRESS,
      RELAY_URL,
      NETWORK,
      { password: "lfg" }
    );

    return JSON.stringify(receipt);
  } catch (error) {
    console.error("Error relaying transaction:", error);
    throw error;
  }
}

/**
 * Relays a transaction to leave a review for a restaurant.
 * 
 * @param {string} restaurantId - The ID of the restaurant to review
 * @param {string} content - The review content
 * @returns {Promise<string>} - A Promise that resolves to the transaction receipt as a string
 */
export async function handleLeaveReview(restaurantId, content) {
  try {
    const action = actionCreators.functionCall(
      "add_review",
      { restaurant_id: restaurantId, content },
      BigInt(300000000000000), // Gas amount
      BigInt(0)                // Attached deposit
    );

    const receipt = await relayTransaction(
      action,
      CONTRACT_ADDRESS,
      RELAY_URL,
      NETWORK,
      { password: "lfg" }
    );

    return JSON.stringify(receipt);
  } catch (error) {
    console.error("Error leaving review:", error);
    throw error;
  }
}