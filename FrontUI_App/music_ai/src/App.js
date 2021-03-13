import React from 'react'
import SongTable from './tables/UserRecommendationTable'

const App = () => {
  return (
    <div className="container">
      <h1> Music Recommender App </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>List of Songs</h2>
          <SongTable />
        </div>
      </div>
    </div>
  )
}

export default App