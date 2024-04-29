import React from 'react'
import summeduplogo from '../assets/imgs/SummedUp-logo.png'

export default function AppHeader() {
    return (
        <section className="app-header">
            <div className='logo-cont'>
                <img src={summeduplogo} alt="" />
                <h3>SummedUp.Ai</h3>
            </div>
        </section>
    )
}