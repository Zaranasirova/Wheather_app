import React from 'react'
import Search from '../components/Search'
import Hero from '../components/Hero'

const Weather = () => {
    return (
        <main>
            <section className='weather-section'>
                <div className="weather-wrapper">
                    <Search />
                    <Hero/>
                </div>

            </section>
        </main>

    )
}

export default Weather