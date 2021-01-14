import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export const Work = () => {
    return (
        <>
            <Container className='work-box' id='work' fluid="sm">
                <hr className="break"/>
                <Row>
                    <Col className='center'>
                    <h4 className='Kelson-ExtraBold work-header' >— Work —</h4>
                    </Col>
                </Row>

                <Container className='project-box'>
                    <Row xs={1} sm={2}>
                        <Col className='image-box' xs={12} sm={{ span: 4, offset: 1 }}>
                            <Image src='./images/TravelShots-ShotCollection.png' contain className="work-images" alt="screenshot of TravelShots app" class="img-responsive" ></Image>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h3 className="project-title">TravelShots Photo Shot List Creator</h3>
                            <p>I created TravelShots to explore a solution that would allow traveling photographers to easily create and organize 
                                shot lists and to showcase my front-end programming skills.
                            </p>
                            <p className='tech' >Miro  |  UX  |  DBDiagram  |  API  |  Semantic UI  |  ReactJS  |  HTML + CSS</p>
                            <Link to='/travelshots' target="_blank"><Button variant="outline-secondary">Read More</Button></Link>
                        </Col>
                    </Row>
                </Container>

                <hr className="break"/>

                <Container className='project-box'>
                    <Row xs={1} sm={2}>
                        <Col className='image-box' xs={12} sm={{ span: 4, offset: 1 }}>
                            <Image src='./images/ClassWebsite-MainPage.png' contain className="work-images" alt="screenshot of Class Website" class="img-responsive" ></Image>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h3 className="project-title">Showcase for Cohort 43</h3>
                            <p>Served as UX researcher and front-end developer on React-based class website highlighting students of Cohort 43.
                                 Contributed to UI/UX design planning and conducted virtual user testing. 
                            </p>
                            <p className='tech' >Figma  |  UX  |  User Testing  |  ReactJS  |  HTML + CSS</p>
                            <Link to='/cohort43' target="_blank" ><Button variant="outline-secondary">Read More</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}