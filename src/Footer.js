import React, { Component } from "react";

class Footer extends Component {
    render() {
        return(
                <footer class="container-fluid py-2 bg-dark text-white fixed-bottom">
                    <div class="container-fluid text-center">
                        <small>Copyright &copy; Designed with <i class="far fa-heart"></i> by PyLadies Bratislava</small>
                    </div>
                </footer>
        )
    }
}

export default Footer;
