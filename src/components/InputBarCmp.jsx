import React, { Component } from 'react'
import SearchIcon from '../assets/imgs/search-icon.svg'

export default class InputBarCmp extends Component {
    state = {
        inputUrl: '',
    }

    handleInputChange = (event) => {
        this.setState({ inputUrl: event.target.value })
    }

    extractYouTubeVideoId = () => {
        const { inputUrl } = this.state
        const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/
        const match = inputUrl.match(youtubeRegex)
        if (match) {
            const videoId = match[1]
            this.props.handleVideoIdChange(videoId)
        } else {
            this.setState({ videoId: null, inputUrl: '' })
            alert('Invalid YouTube URL.')
        }
    }

    render() {
        const { inputUrl } = this.state

        return (
            <section className="input-bar-cont">
                <input
                    type="text"
                    placeholder="Youtube video url"
                    value={inputUrl}
                    onChange={this.handleInputChange}
                />
                <button className="search-icon-cont" onClick={this.extractYouTubeVideoId}>
                    <img src={SearchIcon} alt="" />
                </button>
            </section>
        )
    }
}
