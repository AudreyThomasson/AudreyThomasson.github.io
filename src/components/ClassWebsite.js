import React from 'react'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export const ClassWebsite = () => {
    return (
        <>
            <Container className='casestudy-box'>
                <Row>
                    <Col className='center'>
                        <h4 className='Kelson-ExtraBold'>Project: Showcase for Cohort 43</h4>
                    </Col>
                </Row>

                <Row className='pt-sm-5' xs={1} sm={2} >
                    <Col  xs={12} sm={{ span: 6, offset: 1}} xs={{ order: 1 }} sm={{ order: 'first' }} md={{ order: 'first' }} lg={{ order: 'first' }} xl={{ order: 'first' }}>
                        <h4 className='pt-4 pt-sm-0'>Overview</h4>
                        <p>This React-based class website showcases all 28 students from Cohort 43 at Nashville Software School with links to personal websites,
                            GitHub accounts, and LinkedIn profiles. Nashville Software School has a unique cohort once per year. After the first 3 months, the cohort splits. Some students continue on the Full-Stack
                            path and some students focus on UI/UX Design and Front-End development.
                    
                        </p>
                        
                        
                        <h4 className='pt-sm-4'>Framing the Challenge</h4>
                        <p>The eight students in the UI/UX side of the cohort (including myself) were tasked with designing and building the class website. There were several challenges we had to address. In the past, students
                            were onsite and had access to a professional photographer for group and individual photos to be used on the website. Because of COVID, this was a fully remote class from start to finish. 
                            This cohort includes two different study paths so we also had the challenge of making it easy to identify if a student was Front-End or Full-Stack while making sure both paths were 
                            equally showcased. This leads to the challenge statement of: <strong>How might we design a website that best showcases the students of Cohort 43 to those that might hire them?</strong></p>
                    </Col>
                    <Col className='center' xs={12} sm={{ span: 4 }} xs={{ order: 'first' }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }} xl={{ order: 1 }}>
                        <a href='./images/ClassWebsite-MainPage.png' target='_blank'>
                            <Image className='center' src='./images/ClassWebsite-MainPage.png' contain className="casestudy-images img-responsive" alt="screenshot of Cohort 43 class website" ></Image>
                        </a>
                    </Col>
                </Row>
                <hr className="break"/>

                <Row xs={1}>
                    <Col >
                        <h4>Initial Research</h4>
                        <p>We started out our research by looking at past Cohort websites. Many of them have a similar look with a silly group photo or a screen of students in zoom
                            squares for some of the remote cohorts. We paid extra attention to a few cohort websites that featured a split cohort like ours. We debated the 
                            ultimate goal and audience of the website. Was this a virtual yearbook for the group or was this a tool for potential employers? After agreeing on
                            the fact that it was a tool for potential employers we made some decisions: no silly group photo that we would be unable to take anyway, no screen of zoom square 
                            photos...let's get right to the important information. Then we researched alternatives for displaying each student. Perhaps a different shape? In this early rendering, Jeff Goldblum stands in
                            for a student as we explore having each student showcased on a hexagon shape instead of a traditional square.
                        </p>
                    </Col>
                    <Col className='center'>
                        <a href='./images/ClassWebsite-HexStudents.png' target='_blank'>
                            <Image src='./images/ClassWebsite-JeffGoldblum.png' contain className="casestudy-images img-responsive" alt="hexagon shapes with photo of jeff goldblum as stand-in for student photos" ></Image>
                        </a>
                    </Col>    
                    <Col >
                        <p>We decided the hexagon shape was not ideal for showcasing names and all the links we would need. However, it did help with the color scheme as we needed two strong
                            colors for the two sides of the cohort. I combined the gold from a honeycomb with a bright version of one of the colors of the year according to several paint
                            companies. This gave us gold and teal.
                        </p>
                    </Col>    
                        <h4 className='pt-sm-4'>User Testing</h4>
                        <p>We created a working mock up of website in Figma and did a few remote user tests. In the initial version, I designed a large hexagon graphic for the hero image and the 
                            website had the option to search by student name plus a dropdown menu to filter students by Everyone, just Front-End, or just Full-Stack. At the bottom of the page, we used tabs
                            to separate out the technologies learned together during the first three months and then those learned in the second half.
                        </p>
                    <Col className='center'>
                        <a href='./images/ClassWebsite-SearchDropdown.png' target='_blank'>
                            <Image src='./images/ClassWebsite-SearchDropdown.png' contain className="casestudy-images img-responsive" alt="class website with search bar and dropdown" ></Image>
                        </a>
                    </Col>
                    <Col className='center pt-4'>
                        <a href='./images/ClassWebsite-TabSkillsTech.png' target='_blank'>
                            <Image src='./images/ClassWebsite-TabSkillsTech.png' contain className="casestudy-images img-responsive" alt="class website tab section for skills and tech"></Image>
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
                                <li>An option to easily save the url of a photo already on the web as an alternative to uploading one</li>
                                <li>Have the website connect to a browser extension that will let the user save a photo directly
                                    from any web page with just a few clicks.</li>
                            </ul> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}