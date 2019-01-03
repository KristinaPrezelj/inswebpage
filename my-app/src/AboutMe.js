import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-materialize'
import ScrollAnimation from 'react-animate-on-scroll';
class Me extends Component {
    render() {
        return (
            <div>
            <ScrollAnimation animateIn="fadeInRight">
                <div class="container row col s12 m7">
                    <h5 class="center">O meni</h5>
                    <div class="card small horizontal">
                        
                        <div class="card-stacked orange accent-3">
                            <div class="card-content">
                            <p class="white-text">
                                Zvanje magistre kemije stekla sam 2016. godine na PMF-u Zagrebačkog 
                                sveučilišta. Nakon završenog preddiplomskog studija, upisala sam 
                                istraživački smjer na diplomskom studiju, usmjerenje Anorganska i
                                 Analitička kemija. Tijekom preddiplomskog studija, volontirala 
                                 sam na IRB-u u Laboratoriju za kemiju čvrstog stanja. Za vrijeme 
                                 diplomskog studija, izradila sam diplomski rad na Zavodu za opću
                                  i anorgansku kemiju te sam pored toga provela 3 mjeseca u Varšavi 
                                  na Erasmus razmjeni gdje sam se bavila organskom sintezom.
                                </p>
                            </div>
                        </div>
                        <div class="responsive-img card-image">
                            <img src="ja.jpg" />
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        )
    }
}
export default Me
