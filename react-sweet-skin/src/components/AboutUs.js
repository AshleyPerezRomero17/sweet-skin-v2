import React from 'react';

// define a class-based React component called AboutUs
class AboutUs extends React.Component {
  // this method returns JSX that is rendered to the page
render() {
    // the JSX returned defines a main element with a class of "about-us"
    return (
        <main className="about-us">
            <div className="slide-up__img"></div>
            <div>
                <h1>ABOUT SWEET SKIN</h1>
            </div>

            <div className="about-us__content">
                <h2>ABOUT US</h2>
                <p>Sweet Skin, which made its debut in January 2019, aims to introduce unique items to the skincare
                    industry. Every aspect of our skincare formulas are carefully picked to the highest standards, beginning
                    with their source and finishing with their formulation.</p>

                <h2>OUR PHILOSOPHY</h2>
                <p>Our goods are meticulously crafted, vetted, and tested before release.
                    To create solutions that are both secure and efficient, we collaborate closely with a group of gifted
                    skincare chemists. At Sweet Skin , developing new products requires months of testing and formulating,
                    down to the smallest of details. We put our all into whatever we do.
                    We support a wholistic approach to skin care. Transparency is something we value. Whether it be through
                    our marketing or client service, or socializing on our social media, we believe true and transparent is
                    the way to go!</p>
            </div>
        </main>
    );
}
}

// export the AboutUs component so it can be used in other parts of the application
export default AboutUs;

