import React from 'react'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaLinkedin } from 'react-icons/fa'
import { CgFileDocument } from 'react-icons/cg'
import { GoMarkGithub } from 'react-icons/go'
import { HiOutlineMail } from 'react-icons/hi'
import { IconContext } from 'react-icons'

export const Connect = () => {
    return (
        <Container className="connect-box" id="connect">
            <hr className="break"/>
            <Row>
                <Col className="center">
                <h3 className='Kelson-ExtraBold'>Let's Connect!</h3>
                </Col>
            </Row>
           
            <Row className="connect-ways" xs={1} sm={2} md={2} lg={2} xl={2}>
                <IconContext.Provider value={{ size: "1.5em", title: 'linkedin logo'}}>
                    <Col className='icon-combo' xs={{ order: 2 }} sm={{ order: 'first' }} md={{ order: 'first' }} lg={{ order: 'first' }} xl={{ order: 'first' }}>
                        <div className="connect-icons"><FaLinkedin /></div>
                        <a className='links d-block d-sm-none' href='https://www.linkedin.com/in/audrey-thomasson' target="_blank">see my linkedin</a>
                        <a className='links d-none d-sm-block' href='https://www.linkedin.com/in/audrey-thomasson' target="_blank">linkedin.com/in/audrey-thomasson</a>
                    </Col>
                </IconContext.Provider>

                <IconContext.Provider value={{ size: "1.6em", title: 'resume symbol'}}>
                    <Col className='icon-combo' xs={{ order: 'first' }} sm={{ order: 1 }} md={{ order: 1}} lg={{ order: 1 }} xl={{ order: 1 }}>
                        <div className="connect-icons"><CgFileDocument /></div>
                        <a className='links' href='./files/Audrey-Thomasson-UX-Developer-Resume.pdf' target="_blank">download pdf of resume</a>
                    </Col>
                </IconContext.Provider>


                <IconContext.Provider value={{ size: "1.5em", title: 'github logo'}}>
                    <Col className='icon-combo' xs={{ order: 'last' }} sm={{ order: 2 }} md={{ order: 2}} lg={{ order: 2 }} xl={{ order: 2 }}>
                        <div className="connect-icons"><GoMarkGithub /></div>
                        <a className='links d-block d-sm-none' href='https://www.github.com/audreythomasson' target="_blank">see my github</a>
                        <a className='links d-none d-sm-block' href='https://www.github.com/audreythomasson' target="_blank">github.com/audreythomasson</a>
                    </Col>
                </IconContext.Provider>

                <IconContext.Provider value={{ size: "1.5em", title: 'email icon'}}>
                    <Col className='icon-combo' xs={{ order: 1 }} sm={{ order: 'last' }} md={{ order: 'last' }} lg={{ order: 'last' }} xl={{ order: 'last' }}>
                        <div className="connect-icons"><HiOutlineMail /></div>
                        <a className='links' href='mailto:audreyuxdev@gmail.com' target="_blank">audreyuxdev@gmail.com</a>
                    </Col>
                </IconContext.Provider>
                
            </Row>
            <Row>
                <Col>
                    <small className='footer'>Copyright&copy; 2021 Audrey Thomasson</small>
                </Col>
            </Row>
        </Container>

    )
}