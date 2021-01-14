import React from 'react'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export const About = () => {
    return (
        <>
        <Container className='about-box center' id='about'>
            <Row xs={1} sm={2}>
                <Col className='center' sm={4} >
                    <Image src='./images/Audrey.jpg' className="headshot" alt="headshot of Audrey Thomasson" class="img-responsive" ></Image>
                </Col>
                <Col sm={8}>
                    <h2 className='Kelson-ExtraBold about-title' id='about'>About</h2>
                    <section className="about-text">
                        <p>Hi! I'm Audrey, a UX Designer and Front-End Developer. I am eager to learn: about the user, new products, new services, new technologies, new cookie recipes,
                            new places to travel! With UX my goal is to make a workflow more fluid, simple, and intuitive by understanding the user -- turning the complex into simple, beautiful user experiences. </p>
                        <p>I am passionate about crafting easier
                            and more enjoyable user experiences. My background combines a degree in graphic design, managing experience at a 5-star resort, real estate photography plus
                            front-end development. This allows me to bring a greater depth of knowledge to a product design team.
                            I'm currently focusing on expanding my skills in HTML, CSS, Javascript, and React.</p>
                        <p>I was born and raised in Texas but have been residing in Nashville, TN for over ten years. I am ready to work remotely for a
                            company based anywhere in the world. I'm a lover of coffee, chocolate, cookies, art, and landscape photography. I am 
                            looking forward to being able to safely and easily travel again.</p>
                    </section>
                    <Button variant="outline-secondary" href='./files/Audrey-Thomasson-UX-Developer-Resume.pdf' target="_blank">PDF Resume</Button>
                </Col>
            </Row>
        </Container>


        {/* RESUME SECTION */}
        {/* <hr className="break"/> */}
        {/* <Container className='resume-box'>
            <Row>
                <Col md={12}>
                    <h3 className='Kelson-ExtraBold text-center'>Resume</h3>
                    <Row className='entry'>
                        <Col className='text-right' md={6}>
                            <p>UI/UX DESIGNER & FRONT-END DEVELOPER (APPRENTICESHIP)</p>
                        </Col>
                        <Col md={6}>
                            <p>NASHVILLE SOFTWARE SCHOOL</p>
                            <p>August 2020 - Current</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container> */}
        </>
    )
}