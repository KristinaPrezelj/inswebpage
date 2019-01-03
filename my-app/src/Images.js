import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
class Image extends Component {
    render() {
        return (
            <div>
                <div class="container row col s12 m7">
                    
                <ScrollAnimation animateIn="fadeInLeft">
                <h5 class="center">O instrukcijama</h5>
                    <div class="card horizontal">
                         <div class="card-image">
                            <img src="study.jpeg"></img>
                        </div>
                    <div class="card-stacked purple lighten-2">
                        <div class="card-content">
                             <p class="white-text">Za razliku od pune učionice, svaki učenik ima pogodnost pitati sve što mu
                                 je nejasno. Instrukcije su prilagođene brzini kojom učenik može pratiti
                                  gradivo te je svo gradivo objašnjeno na jednostavan način kroz primjere 
                                  u svakodnevnom životu. Instrukcije se održavaju prema dogovoru, 
                                  u mom prostoru i uključuju kratko objašnjavanje teorije, zatim
                                   pokažem nekoliko primjera zadataka koji su bitni za gradivo, a 
                                   potom učenicima zadajem zadatke gdje uz moje vođenje sami dolaze
                                    do odgovora. Prema svim učenicima i studentima imam isti pristup
                                     gdje se trudim ukazati im na važnost logičkog razmišljanja i 
                                     povezivanje gradiva, jer je to jedini način kako će uspjeti 
                                     dobiti pozitivnu ocjenu. </p>
                        </div>
                         
                    </div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}
export default Image