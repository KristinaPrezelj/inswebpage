import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-materialize'
import ScrollAnimation from 'react-animate-on-scroll';
class Pdf extends Component {
    render() {
        return (
            <div>
            <ScrollAnimation animateIn="fadeIn">
                <Row>
                    <div class="row">
                        <h5 class="center-align">Dokumenti</h5>
                        <div class="col s12 l3">
                            <div class="card orange accent-3">
                                <div class="card-content white-text">
                                    <span class="card-title"></span>
                                    <p>
                                       Skripte za maturu iz kemije.<br></br><br></br>
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a href="Kemija-dm-skripta-proljece2015-1.pdf" class="white-text">SKRIPTA 1</a>
                                    <a href="Kemija-dm-skripta-proljece2015-2.pdf" class="white-text">SKRIPTA 2</a>
                            
                                </div>
                            </div>
                        </div>

                        <div class="col s12 l3">
                            <div class="card orange accent-3">
                                <div class="card-content white-text">
                                    <span class="card-title"></span>
                                    <p>
                                       Konstante i formule: stehiometrija, otopine i koligativna svojstva.
                                    </p>
                                </div>
                                <div class="card-action">
                                <a href="Formule.pdf" class="white-text">FORMULE</a>
                            
                                </div>
                            </div>
                        </div>

                        <div class="col s12 l3">
                            <div class="card orange accent-3">
                                <div class="card-content white-text">
                                    <span class="card-title"></span>
                                    <p>
                                     Redoks reakcije i elektrokemija.<br></br><br></br>
                                    </p>
                                </div>
                                <div class="card-action ">
                                    <a href="ELEKTROKEMIJA.PDF" class="white-text">REDOKSI I ELEKTROKEMIJA</a>
                            
                                </div>
                            </div>
                        </div>

                        <div class="col s12 l3">
                            <div class="card orange accent-3">
                                <div class="card-content white-text">
                                    <span class="card-title"></span>
                                    <p >
                                        Skripta za analitičku kemiju u pripremi.<br></br><br></br>
                                        <br></br>
                                    </p>
                                </div>
                                <div class="card-action">
                                    
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Pdf
