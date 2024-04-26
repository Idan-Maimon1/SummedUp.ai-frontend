import React, { Component } from 'react'
import InputBarCmp from '../components/InputBarCmp'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <section className='lnding-page-cont'>
                    <div className="landing-page-layout">
                        <h1>SummedUp.AI</h1>

                        <p>Welcome to SummedUp.AI, where learning meets simplicity. Tired of endless searches or watching lengthy videos just to understand a concept? Look no further! SummedUp.AI revolutionizes the way you consume content by offering tailored solutions that go beyond traditional methods.</p>

                        <h3>Why SummedUp.AI and Not Just a Search Bar or Video?</h3>
                        <p><span className='bold'>Enhanced Understanding:</span> While search engines provide a plethora of information, SummedUp.AI goes the extra mile by distilling complex topics into digestible summaries and simplified explanations. Say goodbye to information overload and hello to clarity.</p>
                        <p><span className='bold'>Personalized Assistance:</span> Unlike videos where interaction is limited, SummedUp.AI offers a personalized learning experience. Our AI is here to answer your questions, clarify doubts, and provide further insights, empowering you to deepen your understanding.</p>
                        <p><span className='bold'>Niche Expertise:</span> Search engines may yield generic results, but SummedUp.AI specializes in delivering precise, high-quality insights on niche topics. Whether it's learning poker tells or mastering JavaScript interview questions, we've got you covered with curated content tailored to your specific needs.</p>
                        <p><span className='bold'>Efficiency:</span> Time is precious, and we value yours. Instead of spending hours sifting through search results or watching lengthy videos, SummedUp.AI streamlines your learning process. Get the information you need quickly and efficiently, allowing you to focus on what truly matters.</p>

                        <InputBarCmp></InputBarCmp>
                    </div>
                </section>
            </>
        )
    }
}
