import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll';
class Icons extends Component {

    render() {
        return (
            <div>
                <div>
                <ScrollAnimation animateIn="bounceInDown">
  

                    <div class=" row" style={{ paddingBottom: '25px' }}>
                        <div class="center col s3 l3">
                            <FontAwesomeIcon 
                                icon="sad-tear"
                                size="3x"
                                color="#ff9100"
                                transform="down-8 grow-8"
                                
                            />
                        </div>
                        <div class="center col s3 l3">
                            <FontAwesomeIcon
                                icon="mobile-alt"
                                size="3x"
                                color="#ff9100"
                                transform="down-8 grow-8"
                            />
                        </div>
                        <div class="center col s3 l3">
                            <FontAwesomeIcon
                                icon="book-reader"
                                size="3x"
                                color="#ff9100"
                                transform="down-8 grow-8"
                            />
                        </div>
                        <div class="center col s3 l3">
                            <FontAwesomeIcon
                                icon="graduation-cap"
                                size="3x"
                                color="#ff9100"
                                transform="down-8 grow-8"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <p class=" center col s3 l3">
                                Muči vas kemija? Dobili ste negativnu ocjenu ili
                                pali kolokvij?
                            </p>
                            <p class=" center col s3 l3">
                                Kontaktirajte me na 097/6666-569 i dogovorite
                                termin!
                            </p>
                            <p class=" center col s3 l3">
                                Sva pitanja i zadatke ćemo skupa riješiti.
                            </p>
                            <p class=" center col s3 l3">
                                Uspjeli smo!
                            </p>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}


export default Icons