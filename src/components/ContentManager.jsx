import React, { Component } from 'react'

export default class ContentManager extends Component {
    render() {
        const { videoId } = this.props
        return (
            <section className='content-manager-cont'>
                <iframe
                    className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${videoId}?autoplay=0`}
                ></iframe>

            </section>
        )
    }
}
