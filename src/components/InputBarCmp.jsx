import React, { Component } from 'react'
import SearchIcon from '../assets/imgs/search-icon.svg'
import {mediaService} from '../services/mediaService'

export default class InputBarCmp extends Component {
    state = {
        inputUrl: '',
    }

    handleInputChange = (event) => {
        this.setState({ inputUrl: event.target.value })
    }

    extractYouTubeId = () => {
        const { inputUrl } = this.state

        var index = inputUrl.indexOf("v=");

        if (index !== -1) {
            var videoId = inputUrl.substring(index + 2);

            var ampersandIndex = videoId.indexOf("&");
            if (ampersandIndex !== -1) {
                videoId = videoId.substring(0, ampersandIndex);
            }

            if (videoId.length > 11) videoId = videoId.substring(0, 11)

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
                <button className="search-icon-cont" onClick={this.extractYouTubeId}>
                    <img src={SearchIcon} alt="" />
                </button>
            </section>
        )
    }
}
