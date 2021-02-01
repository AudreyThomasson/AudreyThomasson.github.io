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
                            and more enjoyable user experiences. My background combines a degree in graphic design, managing experience at a 5-star resort, and real estate photography. This allows me to bring a greater depth of knowledge to a product design team.
                            I'm currently focusing on UX design / front-end development and expanding my skills in HTML, CSS, Javascript, and React.</p>
                        <p>I was born and raised in Texas but have been residing in Nashville, TN for over ten years. I am ready to work remotely for a
                            company based anywhere in the world. I'm a lover of coffee, chocolate, cookies, art, and landscape photography. I am 
                            looking forward to being able to safely and easily travel again.</p>
                    </section>
                    <Button variant="outline-secondary" href='./files/Audrey-Thomasson-UX-Developer-Resume.pdf' target="_blank">Download Full Resume</Button>
                </Col>
            </Row>
        </Container>



        <hr className="break"/>
        <Container className='resume-box'>
            <Row>
                <Col md={12}>
                    <h3 className='Kelson-ExtraBold pb-4'>Resume</h3>
                    <Row>
                        <Col xl={12}>
                            <h1 className='resume-title'>UI/UX DESIGNER & FRONT-END DEVELOPER (APPRENTICESHIP)</h1>
                            <p className='resume-company'>NASHVILLE SOFTWARE SCHOOL</p>
                            <p className='resume-time'>August 2020 - February 2021</p>
                            <p className='resume-details'>Intensive full-time six-month software development bootcamp focusing on front-end development,
                                UI/UX fundamentals, problem-solving and working in a fully remote team environment.</p>
                        </Col>

                        <Col xl={12}>
                            <h1 className='resume-title'>REAL ESTATE PHOTOGRAPHER & MARKETING MANAGER</h1>
                            <p className='resume-company'>FREELANCE - Nashville, TN</p>
                            <p className='resume-time'>2010-2020</p>
                            <p className='resume-details'>Photograph and film real estate for MLS listings, research property specs, list properties on
                               the MLS, wrote and launched marketing materials. </p>
                        </Col>

                        <Col xl={12}>
                            <h1 className='resume-title'>ASSISTANT MARKETING MANAGER</h1>
                            <p className='resume-company'>JOYMOVES PILATES STUDIO - Austin TX</p>
                            <p className='resume-time'>2007-2010</p>
                            <p className='resume-details'>Design all marketing materials including photography and copy writing for print and online use, use MindBody Online Software to log
                            and monitor daily studio activity, train new hires.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
        </>
    )
}