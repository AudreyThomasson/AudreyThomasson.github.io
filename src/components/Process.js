import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export const Process = () => {
    return (
        <>
            <Container className='pt-2 pb-1' fluid="sm">
                <hr className="break"/>
                <Row>
                    <Col className='center'>
                    <h4 className='Kelson-ExtraBold pb-sm-3' >— Process —</h4>
                    </Col>
                </Row>

                <Container className=''>
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
                </Container>
            </Container>

        </>
    )
}