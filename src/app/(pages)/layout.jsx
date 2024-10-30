import React from 'react'
import HomePageHeader from '../components/home/HomePageHeader'

export default function HomeLayout({ children }) {
  return (
    <>
        <HomePageHeader />
        { children }
    </>
  )
}
