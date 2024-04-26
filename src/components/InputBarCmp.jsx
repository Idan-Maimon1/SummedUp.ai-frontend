import React, { Component } from 'react'
import SearchIcon from '../assets/imgs/search-icon.svg'

export default class InputBarCmp extends Component {
    render() {
        return (
            <section className="input-bar-cont">
                <input type="text" placeholder='Youtube video url' />
                <button className='search-icon-cont'>
                    <img src={SearchIcon} alt="" />
                </button>
            </section>
        )
    }
}
