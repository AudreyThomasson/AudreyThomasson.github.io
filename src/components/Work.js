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
            <Container className='pt-4 pb-1' id='work' fluid="sm">
                <hr className="break"/>
                <Row>
                    <Col className='center'>
                    <h4 className='Kelson-ExtraBold pb-sm-2' >— Work —</h4>
                    </Col>
                </Row>

                <Container className='py-3'>
                    <Row xs={1} sm={2}>
                        <Col className='center' xs={12} sm={{ span: 4, offset: 1 }}>
                            <Link to='/cohort43' >
                                <Image src='./images/ClassWebsite-MainPage.png' contain className="work-images img-responsive" alt="screenshot of Class Website" ></Image>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h3 className="project-title">Showcase for Cohort 43</h3>
                            <p>Served as UX researcher and front-end developer on React-based class website highlighting students of Cohort 43.
                                 Contributed to UI/UX design planning and conducted virtual user testing. 
                            </p>
                            <p className='tech' >Figma  |  UX  |  User Testing  |  ReactJS  |  HTML + CSS</p>
                            <Link to='/cohort43' ><Button variant="outline-secondary">Read More</Button></Link>
                        </Col>
                    </Row>
                </Container>

                <hr className="break"/>
                
                <Container className='py-3'>
                    <Row xs={1} sm={2}>
                        <Col className='center' xs={12} sm={{ span: 4, offset: 1 }}>
                            <Link to='/travelshots' >
                                <Image src='./images/TravelShots-ShotCollection.png' contain className="work-images img-responsive" alt="screenshot of TravelShots app" ></Image>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h3 className="project-title">TravelShots Photo Shot List Creator</h3>
                            <p>I created TravelShots to explore a solution that would allow traveling photographers to easily create and organize 
                                shot lists and to showcase my front-end programming skills.
                            </p>
                            <p className='tech' >Miro  |  UX  |  DBDiagram  |  API  |  Semantic UI  |  ReactJS  |  HTML + CSS</p>
                            <Link to='/travelshots' ><Button variant="outline-secondary">Read More</Button></Link>
                        </Col>
                    </Row>
                </Container>


               
            </Container>
        </>
    )
}