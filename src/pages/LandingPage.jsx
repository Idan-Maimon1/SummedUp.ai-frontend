import React, { Component } from 'react'
import InputBarCmp from '../components/InputBarCmp'
import HeroCmp from '../components/HeroCmp'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <section className='lnding-page-cont'>
                    <div className="landing-page-layout">
                        <HeroCmp />
                        <InputBarCmp />
                    </div>
                </section>
            </>
        )
    }
}
