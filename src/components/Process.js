import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from 'react-bootstrap/Image'

export const Process = () => {
    return (
        <>
            <Container className='pt-2 pb-1' fluid="sm">
                <hr className="break"/>
                <Row>
                    <Col className='center'>
                    <h4 className='Kelson-ExtraBold pb-sm-4' >— Process —</h4>
                    </Col>
                </Row>

                <Row xs={1} sm={2} md={2} lg={4} xl={4}>
                    <Col className="px-4 middle-xs">
                    <Card className='pt-2' border="0" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='./images/idea.svg' contain className="pt-3 skills-icon blue-filter img-responsive" alt="icon of head with tools"/>
                        <Card.Body>
                        <Card.Title className="text-center">Strategy</Card.Title>
                        <Card.Text>
                           <ul>
                               <li>Stakeholder interviews</li>
                               <li>Define the project</li>
                               <li>Craft problem statement</li>
                               <li>List priorities</li>
    
                           </ul>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col className="px-4 middle-xs">
                    <Card className='pt-2' border="0" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='./images/search.svg' contain className="pt-3 skills-icon blue-filter img-responsive" alt="icon of head with tools"/>
                        <Card.Body>
                        <Card.Title className="text-center">Research</Card.Title>
                        <Card.Text>
                           <ul>
                               <li>User interviews</li>
                               <li>Surveys</li>
                               <li>Personas</li>
                               <li>Current competition</li>
    
                           </ul>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col className="px-4 middle-xs">
                    <Card className='pt-2' border="0" className="px-4" style={{ width: '19rem', border: 'medium'}}>
                        <Card.Img variant="top" src='./images/computer.svg' contain className="pt-3 skills-icon blue-filter img-responsive" alt="icon of head with tools"/>
                        <Card.Body>
                        <Card.Title className="text-center">UX Design</Card.Title>
                        <Card.Text>
                           <ul>
                               <li>Wireframing</li>
                               <li>User Flows</li>
                               <li>Interactive Prototyping</li>
                               <li>Test and Refine</li>
    
                           </ul>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col className="px-4 middle-xs">
                        <Card className='pt-2' border="0" className="px-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='./images/coding.svg' contain className="pt-3 skills-icon blue-filter img-responsive" alt="icon of head with tools"/>
                            <Card.Body>
                            <Card.Title className="text-center">Front-End</Card.Title>
                            <Card.Text>
                            <ul>
                                <li>HTML</li>
                                <li>CSS / SASS</li>
                                <li>Javascript</li>
                                <li>React & Vue</li>
        
                            </ul>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                {/* <Container className=''>
                    <Row xs={1} sm={4}>
                        <Col className='center py-2'>
                        <Image src='./images/idea.svg' contain className="skills-icon blue-filter img-responsive" alt="screenshot of TravelShots app" ></Image>
                        </Col>
                        <Col className='center py-2'>
                        <Image src='./images/search.svg' contain className="skills-icon blue-filter img-responsive" alt="screenshot of TravelShots app" ></Image>
                        </Col>
                        <Col className='center py-2'>
                        <Image src='./images/computer.svg' contain className="skills-icon blue-filter img-responsive" alt="screenshot of TravelShots app" ></Image>
                        </Col>
                        <Col className='center py-2'>
                        <Image src='./images/coding.svg' contain className="skills-icon blue-filter img-responsive" alt="screenshot of TravelShots app" ></Image>
                        </Col>

                    </Row>
                </Container> */}
            </Container>

        </>
    )
}