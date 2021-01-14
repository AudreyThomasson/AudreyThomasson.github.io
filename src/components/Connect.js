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
        <Container className="pt-2" id="connect">
            <hr className="break"/>
            <Row>
                <Col className="center">
                <h4 className='Kelson-ExtraBold'>Let's Connect!</h4>
                </Col>
            </Row>
           
            <Row className="connect-ways" xs={1} sm={2}>
                <Col className='pb-1' xs={{ order: 1 }} sm={{ order: 0, span: 3, offset: 3}}>
                    <IconContext.Provider value={{ size: "1.5em", title: 'linkedin logo'}}>
                        <div className="icon-combo pl-5 pl-sm-0">
                            <div className="connect-icons"><FaLinkedin /></div>
                            <a className='links d-block d-sm-none' href='https://www.linkedin.com/in/audrey-thomasson' target="_blank">see my linkedin</a>
                            <a className='links d-none d-sm-block' href='https://www.linkedin.com/in/audrey-thomasson' target="_blank">linkedin.com/in/audrey-thomasson</a>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "1.5em", title: 'github logo'}}>
                        <div className="icon-combo pl-5 pl-sm-0">
                            <div className="connect-icons"><GoMarkGithub /></div>
                            <a className='links d-block d-sm-none' href='https://www.github.com/audreythomasson' target="_blank">see my github</a>
                            <a className='links d-none d-sm-block' href='https://www.github.com/audreythomasson' target="_blank">github.com/audreythomasson</a>
                        </div>
                    </IconContext.Provider>
                </Col>

                <Col className='pb-1 pl-sm-5' xs={{ order: 0 }} sm={{ order: 1, span: 3}}>
                    <IconContext.Provider value={{ size: "1.6em", title: 'resume symbol'}}>
                        <div className="icon-combo pl-5 pl-sm-0">
                            <div className="connect-icons"><CgFileDocument /></div>
                            <a className='links' href='./files/Audrey-Thomasson-UX-Developer-Resume.pdf' target="_blank">download pdf of resume</a>
                        </div>
                    </IconContext.Provider>


                    <IconContext.Provider value={{ size: "1.5em", title: 'email icon'}}>
                        <div className="icon-combo pl-5 pl-sm-0">
                            <div className="connect-icons"><HiOutlineMail /></div>
                            <a className='links' href='mailto:audreyuxdev@gmail.com' target="_blank">audreyuxdev@gmail.com</a>
                        </div>
                    </IconContext.Provider>
                </Col>       
            </Row>

            <Row>
                <Col>
                    <small className='pt-4 center'>Copyright&copy; 2021 Audrey Thomasson</small>
                </Col>
            </Row>
        </Container>

    )
}