import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>I hope you find me as a good candidate for a certain job position in your company. contact me through this channels. Thank you!</p>
                    <div className="icons">
                        <div className="row">
                            <div className="info">
                                <div className="head">Name:</div>
                                <div className="sub-title">Dominic S. Villanueva</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="info">
                                <div className="head">Address:</div>
                                <div className="sub-title">Kapalong, Davao Del Norte, Philippines</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="info">
                                <div className="head">Email:</div>
                                <div className="sub-title">dominicvillanueva07@gmail.com</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="info">
                                <div className="head">Contact Number:</div>
                                <div className="sub-title">09915708880</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="text">Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required>
                                </input>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required>
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required>
                            </input>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts