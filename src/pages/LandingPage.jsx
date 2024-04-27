import React, { Component } from 'react'
import HeroCmp from '../components/HeroCmp'
import InputBarCmp from '../components/InputBarCmp'
import ContentManager from '../components/ContentManager'

export default class LandingPage extends Component {
    state = {
        videoId: null,
    }

    handleVideoIdChange = (videoId) => {
        this.setState({ videoId })
    }

    render() {
        const { videoId } = this.state
        return (
            <>
                <section className='lnding-page-cont'>
                    <div className="landing-page-layout">
                        <HeroCmp />
                        <InputBarCmp handleVideoIdChange={this.handleVideoIdChange} />
                        {videoId && <ContentManager videoId={videoId} />}
                    </div>
                </section>
            </>
        )
    }
}
