import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import WebFont from 'webfontloader'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

WebFont.load({
    google: {
        families: ['Libre Franklin:300,400,600,700', 'sans-serif', 'Libre Baskerville:400,700', 'serif']
    }
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
