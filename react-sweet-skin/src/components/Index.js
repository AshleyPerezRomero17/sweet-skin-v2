import React from 'react';
import SlideShow from './SlideShow.js';

class Index extends React.Component {
render() {
    return (
    <div id="home-page">

    <SlideShow />

        <div className="hero-content">
            <h1>OUR GOAL IS TO CHANGE THE WAY YOU VIEW SKIN CARE.</h1>
            <p>Natural ingredients that produce results are what we believe in. <br/> After all, our largest organ deserves
                only the safest ingredients.</p>
        </div>

        <div className="partners">
            <h3>AS SEEN IN</h3>
            <ul>
                <li><img src="/assets/img/ulta.png" alt="Ulta" /></li>
                <li><img src="/assets/img/VOGUE.png" alt="VOGUE" /></li>
                <li><img src="/assets/img/sephora.png" alt="Sephora" /></li>
            </ul>
        </div>

        <div className="main main--desktop">
            <div className="image-container">
                <img src="/assets/img/gif-1.gif" alt="skin care product" />
                <div className="image-content">
                    <h3>WELCOME TO SWEET SKIN</h3>
                    <p>We are your go-to brand for clinically effective skincare advances and sensual self-care experiences.
                        We create fruit-forward, pure formulations for skin that glows. We believe that when we work
                        together, we shine even brighter, which is why we're thrilled to have you join our community of
                        people who value diversity, individuality, and sustainability.</p>
                </div>
            </div>

            <div className="image-container">
                <div className="image-content">
                    <h3>OUR FORMULAS ARE DIFFERENT</h3>

                    <p>We develop delicate yet powerful solutions to provide unmatched clinically validated results. We use
                        the best ingredients possible when creating our formulas, such as antioxidant-rich fruit extracts
                        and clinically tested actives. We always use clean, and Leaping Bunny-certified cruelty-free ingredients.</p>

                    <div className="home-link">
                        <a className="button" href="/src/components/Products">Shop Sweet Skin</a>
                    </div>
                </div>
                <img src="/assets/img/gif-2.gif" alt="skin care product" />

            </div>

            <div className="image-container">
                <img src="/assets/img/gif-3.gif" alt="skin care product" />
                <div className="image-content">
                    <h3>WE KEEP IT REAL AT SS</h3>
                    <p>We want you to love your skin, which means having realistic beauty standards. We promise to never use
                        the words "poreless," "perfect," "ageless," or "flawless" because these are not realistic skin
                        goals.</p>
                </div>
            </div>
        </div>

        <div className="main main--mobile">
            <div className="image-container">
                <img src="/assets/img/gif-1.gif" alt="skin care product" />
                <div className="image-content">
                    <h3>WELCOME TO SWEET SKIN</h3>
                    <p>We are your go-to brand for clinically effective skincare advances and sensual self-care experiences.
                        We create fruit-forward, pure formulations for skin that glows. We believe that when we work
                        together, we shine even brighter, which is why we're thrilled to have you join our community of
                        people who value diversity, individuality, and sustainability.</p>
                </div>
            </div>

            <div className="image-container">
                <img src="/assets/img/gif-2.gif" alt="skin care product" />
                <div className="image-content">
                    <h3>OUR FORMULAS ARE DIFFERENT</h3>

                    <p>We develop delicate yet powerful solutions to provide unmatched clinically validated results. We use
                        the best ingredients possible when creating our formulas, such as antioxidant-rich fruit extracts
                        and clinically tested actives. We always use clean, and Leaping Bunny-certified cruelty-free ingredients.</p>
                    <div className="home-link">
                        <a className="button" href="/src/components/Products">Shop Sweet Skin</a>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <img src="/assets/img/gif-3.gif" alt="skin care product" />
                <div className="image-content">
                    <h3>WE KEEP IT REAL AT SS</h3>
                    <p>We want you to love your skin, which means having realistic beauty standards. We promise to never use
                        the words "poreless," "perfect," "ageless," or "flawless" because these are not realistic skin
                        goals.</p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Index;
