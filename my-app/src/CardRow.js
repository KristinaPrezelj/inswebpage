import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
class Cards extends Component {
    render() {
        return (
            <div>
            <ScrollAnimation animateIn="fadeIn">
                <section class="section">
                    <div class="row">
                    <h5 class="center-align">Cijena</h5>
                        <div class="card small col s12 l3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img
                                    class="activator"
                                    src="pexels-photo-248152.jpeg"
                                />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Osnovna škola
                                    <i class="material-icons right">
                                        more_vert
                                    </i>
                                </span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    Cijena
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>60kn/60min</p>
                            </div>
                        </div>

                        <div class="card small col s12 l3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img
                                    class="activator"
                                    src="pexels-photo-272980.jpeg"
                                />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Srednja škola
                                    <i class="material-icons right">
                                        more_vert
                                    </i>
                                </span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    Cijena
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>70kn/60min</p>
                                <p>
                                    Instrukcije su moguće za srednjoškolce svih
                                    usmjerenja: gimnazija, kemijska škola,
                                    medicinska škola te ostale škole.
                                </p>
                            </div>
                        </div>

                        <div class="card small col s12 l3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img
                                    class="activator"
                                    src="pexels-photo-1328891.jpeg"
                                />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Matura iz kemije
                                    <i class="material-icons right">
                                        more_vert
                                    </i>
                                </span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    Cijena
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>60kn/60min</p>
                                <p>
                                    Moguće su pripreme za maturu i prijamne
                                    ispite pri čemu se koristim prijašnjim
                                    maturama i prijamnim ispitima te raznim
                                    zadacima iz metodičkih priručnika.
                                </p>
                            </div>
                        </div>
                        <div class="card small col s12 l3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img
                                    class="activator"
                                    src="pexels-photo-132477.jpeg"
                                />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Fakultet
                                    <i class="material-icons right">
                                        more_vert
                                    </i>
                                </span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    Cijena
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>80kn/60min</p>
                                <p>
                                    Instrukcije se održavaju iz svih grana
                                    kemije: opća i anorganska kemija, analitička
                                    kemija, biokemija, organska kemija i
                                    fizikalna kemija.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                </ScrollAnimation>
            </div>
        )
    }
}
export default Cards