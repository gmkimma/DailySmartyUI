import React, { Component } from 'react'

import Logo from './logo'
import SearchBar from './searchBar'
import RecentPosts from './recentPosts'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <div class='logo'>
          <Logo />
        </div>

        <div class='search'>
          <SearchBar />
        </div>

        <div class='recent'>
          <RecentPosts />
        </div>
      </div>
    )
  }
}
