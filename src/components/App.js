import React, { Component } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AirportList from './AirportList'
import HomeList from './HomeList'

class App extends Component {
    componentDidMount() {
        document.title = 'Come Visit NY!'
    }

    render() {
    return (
        <div>
            <Hero message='Welcome Message' />
            <BrowserRouter>
            <div>
                <Nav />
                    <Switch>
                        <Route exact path='/' component={ HomeList } />
                        <Route path='/airport' component={ AirportList } />
                    </Switch>
            </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
    }
}

export default App
