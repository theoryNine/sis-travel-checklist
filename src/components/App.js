import React, { Component } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AirportList from './AirportList'
import HomeList from './HomeList'

class App extends Component {
  render() {
    return (
        <div>
            <Hero />
            <Nav />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeList} />
                    <Route exact path='/airport' component={AirportList} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
  }
}

export default App
