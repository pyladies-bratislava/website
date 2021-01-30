import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render () {
        return (
            <React.Fragment> 
            <div class="container">
                <img src="/assets/jumbotron.jpeg" class="img-fluid" alt="Responsive image" width="1150" height="350"></img>
            </div>
            <div class="container">    
                    <h1 class="text-center">We'd <i class="far fa-heart"></i> to help.</h1>
                    <h4 class="text-center">We like to create things with fun, open minded people. <br /> Feel free to say hello.</h4>
                <div class="row">
                    <div class="col-3">
                        <div class="card border-0">
                            <div class="card-body text-center">
                                <a class="text-dark" href="https://www.facebook.com/groups/PyLadiesBratislava/" target="_blank" rel="noopener"><i class="fab fa-facebook fa-4x" aria-hidden="true"></i></a>
                                <p class="card-text">Facebook</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card border-0">
                            <div class="card-body text-center">
                                <a class="text-dark" href="https://pyladies.slack.com/archives/CGF33FSMD" target="_blank" rel="noopener"><i class="fab fa-slack fa-4x" aria-hidden="true"></i></a>
                                <p class="card-text">Slack</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card border-0">
                            <div class="card-body text-center">
                                <a class="text-dark" href="https://github.com/pyladies-bratislava" target="_blank" rel="noopener"><i class="fab fa-github fa-4x" aria-hidden="true"></i></a>
                                <p class="card-text">GitHub</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card border-0">
                            <div class="card-body text-center">
                                <a class="text-dark" href="mailto:bratislava@pyladies.com" target="_blank" rel="noopener"><i class="fas fa-at fa-4x" aria-hidden="true"></i></a>
                                <p class="card-text">Email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center pt-5 pb-5">
                <h3 class="text-decorated">We are here to help you start learnig coding. Send us an email at</h3>
                <h2 class="text-decorated font-weight-bold">bratislava@pyladies.com</h2>
            </div>
        </React.Fragment>    
        );
    }
}

export default Contact;
