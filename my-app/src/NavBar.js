import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll'

class Navbar extends Component {
    render() {
        return (
            <div class="parallax-container">
                <div class="parallax">
                    <img src="book.jpg" />
                </div>

                <nav class="nav-wrapper transparent">
                    <div class="container">
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <a href="">O instrukcijama</a>
                            </li>
                            <li>
                                <a href="">Cijena</a>
                            </li>
                            <li>
                                <a href="">O meni</a>
                            </li>
                            <li>
                                <a href="">Kontakt</a>
                            </li>
                            <li>
                                <a href="">Dokumenti</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h1 class="white-text center-align">
                    <ScrollAnimation animateIn="fadeInUp">
                        Kvalitetne instrukcije iz kemije na području Rijeke!
                    </ScrollAnimation>
                </h1>
            </div>
        )
    }
}

export default Navbar
