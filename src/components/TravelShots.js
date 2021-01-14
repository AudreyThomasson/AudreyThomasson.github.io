import React from 'react'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export const TravelShots = () => {
    return (
        <>
            <Container className='casestudy-box'>
                <Row>
                    <Col className='center'>
                        <h4 className='Kelson-ExtraBold'>Project: TravelShots Photo Shot List Creator</h4>
                    </Col>
                </Row>

                <Row className='pt-sm-5' xs={1} sm={2} >
                    <Col  xs={12} sm={{ span: 6, offset: 1}} xs={{ order: 1 }} sm={{ order: 'first' }} md={{ order: 'first' }} lg={{ order: 'first' }} xl={{ order: 'first' }}>
                        <h4 className='pt-4 pt-sm-0'>Overview</h4>
                        <p>I created TravelShots to explore a solution that would allow traveling photographers to easily create and organize 
                            shot lists. The main goal of this project was to showcase my front-end programming skills using HTML, CSS, Javascript
                            React, JSON Server, and an external API. This solo project was designed and built in two weeks.
                        </p>
                        
                        
                        <h4 className='pt-sm-4'>Framing the Challenge</h4>
                        <p>Photographers often spend hours researching and planning in order to get the next great shot. There doesn't seem to 
                            be an easy way to organize and save inspiration for a photo shot and then use that inspiration to create a shot list
                            to be used on location. This leads to the challenge statement of: <strong>How might a traveling photographer easily create and organize a shot list?</strong></p>
                    </Col>
                    <Col className='center' xs={12} sm={{ span: 4 }} xs={{ order: 'first' }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }} xl={{ order: 1 }}>
                        <a href='./images/TravelShots-ShotCollection.png' target='_blank'>
                            <Image className='center' src='./images/TravelShots-ShotCollection.png' contain className="casestudy-images img-responsive" alt="screenshot of TravelShots app" ></Image>
                        </a>
                    </Col>
                </Row>
                <hr className="break"/>

                <Row xs={1}>
                    <Col >
                        <h4>Research</h4>
                        <p>I did some research on similar available applications. Some solutions such as a collection of images saved in a desktop folder
                            did not easily have the ability to add and view notes or to mark inspiration as shot. Pinterest is a website and browser extension 
                            that is available to save general types of inspiration
                            but it is not photo shoot specific and you also can not mark off photos as shot without just adding a note to the description
                            of each saved item.
                            Available apps in the app stores will allow you to make a shot list but they do not allow you to save inspiration.
                        </p>
                        
                        
                        <h4 className='pt-sm-4'>Personas</h4>
                        <p>I kept two different primary types of users in mind while creating this website: the professional traveling photographer that 
                            is very active on social media and the photo enthusiast that is a connoisseur of the best equipment and locations.
                        </p>
                    </Col>
                    <Col className='center'>
                        <a href='./images/TravelShots-Persona1.png' target='_blank'>
                            <Image src='./images/TravelShots-Persona1.png' contain className="casestudy-images img-responsive" alt="persona of professional photographer, influencer" ></Image>
                        </a>
                    </Col>
                    <Col className='center pt-4'>
                        <a href='./images/TravelShots-Persona2.png' target='_blank'>
                            <Image src='./images/TravelShots-Persona2.png' contain className="casestudy-images img-responsive" alt="persona of photography enthusiast, equipment connoisseur"></Image>
                        </a>
                    </Col>

                    <Col >
                        <h4 className='pt-4'>Role & Responsibilities</h4>
                        <p>After several group projects with teammates working remotely, this was my first project that was done completely solo. I was tasked with 
                            developing the idea, creating the design, and coding the website. I used Dbdiagram to work out the ERD (entity relation diagram) for the data
                            stored in a JSON server database, Miro was used to sketch out the wireframe, Cloudinary API to allow users to upload photos, and then HTML, CSS, 
                            Javascript, React, and Semantic UI in the code.
                        </p>
                        <h4 className='pt-sm-4'>Constraints</h4>
                        <p>The primary constraint for this project was time. The time frame was over a two week period including conception, planning and coding. The code
                            needed to include full CRUD functionality with add, edit and delete of the photo data.
                        </p>
                    </Col>
                    <Col>
                        <h4 className='pt-sm-4'>Diagramming the Data</h4>
                        <p>I organized the data that would be needed for the project in an ERD (Entity-Relationship Diagram). I was keeping in mind the data that I would
                            directly collect from a user such as the photo notes as well as any data I might want access to later for site functionality such as
                            a field to denote if the photo had been shot yet or not. </p>
                    </Col>
                    <Col className='center'>
                        <a href='./images/TravelShots-ERD.png' target='_blank'>
                            <Image src='./images/TravelShots-ERD.png' contain className="casestudy-images img-responsive" alt="diagram of how data will relate in the database" ></Image>
                        </a>
                    </Col>
                    <Col>
                        <h4 className='pt-4'>Wireframes</h4>
                    </Col>
                    <Col className='center'>
                        <a href='./images/TravelShots-Wireframe.jpg' target='_blank'>
                            <Image src='./images/TravelShots-Wireframe.jpg' contain className="casestudy-images img-responsive" alt="lofi wireframe of the website" ></Image>
                        </a>
                    </Col>
                    <Col >
                        <h4 className='pt-4'>Outcomes & Takeaways</h4>
                        <p>At the end of two weeks, I had met the technical MVP (minimum viable product) goals for this project. I learned a lot about using a component library
                            (Semantic UI) and integrating it with React. I figured out how to set up an API server with Cloudinary to host user uploaded images and integrated the 
                            generated urls with the JSON server. After focusing my efforts on the development side of this project, I was then able to pivot and think again about 
                            the user experience of the website.</p>
                            <p>With this working prototype, I was able to share the project with users and discovered they wanted additional features including:</p>
                            <ul>
                                <li>A section that will allow users to browse the photos saved by other users and add them to their own collections</li>
                                <li>An option to easily save the url of a photo if the user don't want to upload one</li>
                                <li>Have the website connect to a browser extension that will let the user save a photo directly
                                    from any web page with just a few clicks.</li>
                            </ul> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}