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
                    <Button variant="outline-secondary" href='./files/Audrey_Thomasson_UX_Front-End_Developer_Resume.pdf' target="_blank">Download Full Resume</Button>
                </Col>
            </Row>
        </Container>

        <hr className="break"/>
        <Container>
            <Row>
                <Col md={12}>
                    <h3 className='Kelson-ExtraBold pb-4'>Tools & Technology</h3>

                </Col>
            </Row>
            <Row>
                    <Col sm={6} md={3}>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Javascript</p>
                        <p>ReactJS</p>
                        <p>Visual Studio Code</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p>NPM</p>
                        <p>JSON Server</p>
                        <p>Figma</p>
                        <p>Sass</p>
                        <p>FireBase</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p>Bootstrap</p>
                        <p>Semantic UI</p>
                        <p>Adobe Photoshop</p>
                        <p>Adobe Illustrator</p>
                        <p>Slack</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p>Git and GitHub version control</p>
                        <p>Command line work flow</p>
                        <p>Springer-Miller Host & SpaSoft</p>
                        <p>EZ Labor Payroll</p>
                        <p>MindBody Scheduling Software</p>
                    </Col>

            </Row>
        </Container>

        <hr className="break"/>
        <Container>
            <Row>
                <Col md={12}>
                    <h3 className='Kelson-ExtraBold pb-4'>Skills</h3>

                </Col>
            </Row>
            <Row>
                    <Col sm={6} md={3}>
                        <p>User Testing</p>
                        <p>UX Research</p>
                        <p>User Personas</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p>Wireframes</p>
                        <p>Usability Testing</p>
                        <p>Journey Mapping</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p>Interactive Prototypes</p>
                        <p>Remote Teamwork</p>
                    </Col>
            </Row>
        </Container>

        <hr className="break"/>
        <Container>
            <Row>
                <Col md={12}>
                    <h3 className='Kelson-ExtraBold pb-4'>Experience</h3>
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
                            <p className='resume-details'>Photograph and film real estate for MLS listings, interview home sellers while researching property specs, write ad copy for MLS, 
                            list properties on the MLS and upload all pictures and video, launch marketing materials on various websites. </p>
                        </Col>

                        <Col xl={12}>
                            <h1 className='resume-title'>ASSISTANT MARKETING MANAGER</h1>
                            <p className='resume-company'>JOYMOVES PILATES STUDIO - Austin, TX</p>
                            <p className='resume-time'>2007-2010</p>
                            <p className='resume-details'>Design all marketing materials including photography and copywriting for print and online use, use MindBody Online Software to log
                            and monitor daily studio activity, provide stellar customer service, interview and train new hires.</p>
                        </Col>

                        <Col xl={12}>
                            <h1 className='resume-title'>SPA SUPERVISOR</h1>
                            <p className='resume-company'>LAKE AUSTIN SPA RESORT - Austin, TX</p>
                            <p className='resume-time'>2004-2007</p>
                            <p className='resume-details'>Responsible for operation of 25,000 sq ft luxury spa facility including daily management of over 50 therapists’ schedules. Provided 
                                    customer service high-end clientele of over 100 on a daily basis while maintaining five star service reputation.</p>
                        </Col>

                        <Col xl={12}>
                            <h1 className='resume-title'>DESIGNER / PRODUCTION MANAGER</h1>
                            <p className='resume-company'>UNITED PARENTING PUBLICATIONS - Dallas, TX</p>
                            <p className='resume-time'>2001-2003</p>
                            <p className='resume-details'>Designed classified ads and page layouts for 22 unique monthly parenting magazines. Insured accuracy of all ads, layouts, and files transmitted
                            to printing facility while adhering to strict monthly printing deadlines.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        <hr className="break"/>
        <Container className='pb-5'>
            <Row>
                <Col md={12}>
                    <h3 className='Kelson-ExtraBold pb-4'>Education</h3>
                    <Row>
                        <Col xl={12}>
                            <h1 className='resume-title'>UI/UX DESIGN & FRONT-END DEVELOPMENT</h1>
                            <p className='resume-company'>Nashville Software School</p>
                            <p className='resume-time'>August 2020 - February 2021</p>
                        </Col>

                        <Col xl={12}>
                            <h1 className='resume-title'>BACHELOR OF FINE ARTS, Cum Laude</h1>
                            <p className='resume-company'>Major: Communication / Graphic Design</p>
                            <p className='resume-school'>Texas State University</p>                            
                        </Col>

                       
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}