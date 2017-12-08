import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import AirportList from './AirportList'
import HomeList from './HomeList'

class App extends Component {
    componentDidMount() {
        document.title = 'Visit NY!'
    }

    render() {
    return (
        <div>
            <Hero message='Visit NY' />
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
