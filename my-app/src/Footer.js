import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-materialize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FooterInfo extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer purple lighten-2">
                    <div class="container row col l6 s12">
                        <div class="col l4 s12 center-align">
                            <FontAwesomeIcon
                                icon="mobile-alt"
                                size="2x"
                                color="#ffffff"
                            />
                            <p class="white-text">097/6666-569</p>
                        </div>

                        <div class="col l4 s12 center-align">
                            <FontAwesomeIcon
                                icon="envelope-open"
                                size="2x"
                                color="#ffffff"
                            />

                            <p class="white-text">klornakiselina-at-gmail.com</p>
                        </div>

                        <div class="col l4 s12 center-align">
                            <FontAwesomeIcon
                                icon="map-marker-alt"
                                size="2x"
                                color="#ffffff"
                            />

                            <p class="white-text">Zamet, Rijeka</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default FooterInfo
