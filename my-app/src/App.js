import React, { Component } from 'react'
import ContactForm from './Form'
import Me from './AboutMe'
import FooterInfo from './Footer'
import Icons from './IconsRow'
import Cards from './CardRow'
import Image from './Images'
import Navbar from './NavBar'
import Pdf from './Docs'
import "animate.css/animate.min.css"


import { Button, Card, Row, Col } from 'react-materialize'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom} from '@fortawesome/free-solid-svg-icons'
import { faSadTear} from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { faBookReader} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import { faFlask} from '@fortawesome/free-solid-svg-icons'
library.add(faAtom)
library.add(faSadTear)
library.add(faMobileAlt)
library.add(faGraduationCap)
library.add(faBookReader)
library.add(faEnvelopeOpen)
library.add(faMapMarkerAlt)
library.add(faFolderPlus)
library.add(faFlask)

class App extends Component {
    render() {
        return (
            <div className="App">
                
                <Navbar/>
                <Icons/>
                <Image/>
                <Cards/>
                <Me/>
                <ContactForm/>
                <Pdf/>
                <FooterInfo/>
                
            </div>
        )
    }
}

export default App
