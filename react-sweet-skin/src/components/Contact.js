
import React from 'react';

class Contact extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        alert('Thank You For Submitting!');
    };

    render() {
        return (
            <main className="container">
                <h1 style={{textAlign: 'center', marginTop: 0}}>Contact Us</h1>
                <form action="#" onSubmit={this.handleClick} className="contact-form">
                    <div>
                        <label className="break" htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your first name.." required/>
                    </div>

                    <div>
                        <label className="break" htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
                    </div>


                    <div>
                        <label className="break" htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="name@gmail.com" required/>
                    </div>

                    <div className="radio">
                        <p>How can we help you today?</p>

                        <div>
                            <input type="radio" id="option-1" name="shipping"/>
                            <label htmlFor="option-1">Shipping/Receiving Question</label>
                        </div>

                        <div>
                            <input type="radio" id="option-2" name="shipping"/>
                            <label htmlFor="option-2">Order/Delivery Issue</label>
                        </div>

                        <div>
                            <input type="radio" id="option-3" name="shipping"/>
                            <label htmlFor="option-3">Other</label>
                        </div>
                    </div>

                    <div className="feedback-container">
                        <label className="break" htmlFor="feedback">Message For Feedback:</label>
                        <textarea id="feedback" name="Message For Feedback" placeholder="Write something.." rows="4"
                            cols="48"></textarea>
                    </div>

                    <div>
                        <input className="button" type="submit" value="CONNECT WITH US" id="submit-button"/>
                    </div>
                </form>
            </main>
        );
    }
}

export default Contact;


