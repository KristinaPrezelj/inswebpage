import React, { Component } from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps'
import { Button, Card, Row, Col } from 'react-materialize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll'

const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: 45.34439, lng: 14.383576 }}
        >
            <Marker position={{ lat: 45.34439, lng: 14.383576 }} />
        </GoogleMap>
    ))
)

class ContactForm extends Component {
    state = {
        first_name: '',
        email: '',
        comments: '',
    }

    handleChange = e => {
        //this.setState=>changes state
        this.setState({
            [e.target.first_name]: e.target.value, //target.name=> uzima name iz forme i seta ga na uneseni value
            [e.target.email]: e.target.value,
            [e.target.comments]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            first_name: '',
            email: '',
            comments: '',
            file: '',
        })
        console.log(
            this.state.first_name +
                ' ' +
                this.state.email +
                ' ' +
                this.state.comments +
                ' ' +
                this.state.file
        )
        //
    }

    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeIn">
                    <section class="section container">
                        <div class=" row">
                            <h5 class="center-align">Kontakt</h5>
                            <div class="col s12 l5">
                                <form method="POST" action="send-mail.php">
                                    <div class="row">
                                        <input
                                            type="text"
                                            placeholder="Ime"
                                            name="first_name"
                                            class="input-field "
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div class="row">
                                        <input
                                            type="email"
                                            placeholder="E-mail"
                                            name="email"
                                            class="input-field "
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div class="row">
                                        <textarea
                                            placeholder="Poruka"
                                            rows="10"
                                            cols="30"
                                            class="materialize-textarea input-field "
                                            name="comments"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div class="row file-field input-field ">
                                        <button
                                            class="row btn waves-effect waves-light orange accent-3"
                                            type="submit"
                                            name="action"
                                        >
                                            Dodaj
                                            <i class="material-icons right">
                                                folder
                                            </i>
                                            <input
                                                type="file"
                                                name="file"
                                                onChange={this.handleChange}
                                            />
                                        </button>
                                    </div>

                                    <div class="row file-field input-field">
                                        <button
                                            class="row btn waves-effect waves-light orange accent-3"
                                            type="submit"
                                            name="action"
                                        >
                                            Pošalji
                                            <i class="material-icons right">
                                                send
                                            </i>
                                        </button>
                                        
                                    </div>
                                </form>
                            </div>

                            <div class="col s12 l6 offset-l1">
                                <MapWithAMarker
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbL5LIT7LMGC6Gs1ec6ZrNCni_TM2wFWQ&v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={
                                        <div style={{ height: `100%` }} />
                                    }
                                    containerElement={
                                        <div style={{ height: `400px` }} />
                                    }
                                    mapElement={
                                        <div
                                            style={{
                                                height: `100%`,
                                                borderRadius: '5px',
                                            }}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>
        )
    }
}

export default ContactForm
