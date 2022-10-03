import React from 'react'

import Filter from './Container/Filter'
import Header from './Container/Header'
import Table from './Container/Table'
import Card from './Container/Card'

const Home = () => {
  return (
    <div>
        <Header />
        <Table />
        <Filter />
        <Card />
    </div>
  )
}

export default Home
