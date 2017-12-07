import React from 'react'

const Hero = (props) => {
    return (
        <div className='hero-container'>
            <h1>{ props.message }</h1>
        </div>
    )
}

export default Hero
