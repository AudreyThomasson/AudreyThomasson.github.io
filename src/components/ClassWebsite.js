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
                            GitHub accounts, and LinkedIn profiles. This cohort graduates students that are either UI/UX Design and Front-End Developers or Full-Stack C# Developers.
                    
                        </p>
                        
                        
                        <h4 className='pt-sm-4'>Framing the Challenge</h4>
                        <p>The students in the UI/UX side of the cohort were tasked with designing and building the class website. There were several challenges we had to address. In the past, students
                            were onsite and had access to a professional photographer for group and individual photos to be used on the website. Because of COVID, this was a fully remote class from start to finish. 
                            This cohort includes two different study paths so we also had the challenge of making it easy to identify if a student was Front-End or Full-Stack while making sure both paths were 
                            equally showcased. This leads to the challenge statement of: <strong>How might we design a website that best showcases the students of Cohort 43 to those that might hire them?</strong></p>
                    </Col>
                    <Col className='center' xs={12} sm={{ span: 4 }} xs={{ order: 'first' }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }} xl={{ order: 1 }}>
                        <a href='https://nss-day-cohort-43.github.io/' target='_blank'>
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
                        <p className='pt-4'>We decided the hexagon shape was not ideal for showcasing names and all the links we would need. However, it did help with the color scheme as we needed two strong
                            colors for the two sides of the cohort. I combined the gold from a honeycomb with a bright version of one of the colors of the year according to several paint
                            companies. This gave us gold and teal.
                        </p>
                    </Col>
                    <Col>   
                        <h4 className='pt-sm-4'>User Testing</h4>
                        <p>We created a working mock up of website in Figma and did a few remote user tests. In the initial version, I designed a large hexagon graphic for the hero image and the 
                            website had the option to search by student name plus a dropdown menu to filter students by Everyone, just Front-End, or just Full-Stack. At the bottom of the page, we used tabs
                            to separate out the technologies learned together during the first three months and then those learned in the second half.
                        </p>
                    </Col> 
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
                    <Col className='pt-5'>   
                        <p>After several tests, it was clear that users did not understand what "Everyone" meant on the dropdown. However, users did love the 
                            tab section for the technologies. We redesigned the page to use the tabs to filter the students and the technologies together.
                        </p>
                    </Col>
                    <Col className='center pt-4'>
                        <a href='./images/ClassWebsite-TabStudents.png' target='_blank'>
                            <Image src='./images/ClassWebsite-TabStudents.png' contain className="casestudy-images img-responsive" alt="class website tab section for students"></Image>
                        </a>
                    </Col>
                    <Col className='pt-5'>   
                        <p>After more tests, we decided that having three options on the tabs was still a little confusing and users were not that interested in searching. We also revisited the
                            primary goal of the website which was to showcase the students to employers. With that in mind, we decided to use two checkboxes for the two sides of the cohort instead
                            of the three tabs. We also removed the hexagon hero graphic and opted instead for a direct statement asking what the user was looking for with the two checkboxes to filter
                            the students in the cohort below.  
                        </p>
                        <p>Click <a href='https://nss-day-cohort-43.github.io/' target='_blank'>HERE</a> to open the live website in a new tab.</p>
                    </Col> 
                    <Col >
                        <h4 className='pt-4'>Role & Responsibilities</h4>
                        <p>I served as a UX researcher and front-end developer on the class website in a team of eight. I contributed to UI/UX design planning including working on developing the color scheme and 
                            the initial hero graphic. I led one of the virtual user tests and evaluated user testing outcomes. After all the user testing and re-designing, we coded the website using HTML, CSS, Javascipt, and React.
                            I collected and sized all the photos of the students that would be needed and then turned my focus to coding the function to sort students by name. I originally suggested we should sort by first name 
                            but I was decided that sorting by last name was 
                            expected. I also worked on the checkbox functionality to filter the cohort by Front-End or Full-Stack.
                        </p>
                        
                    </Col>
                    
                    <Col >
                        <h4 className='pt-4'>Outcomes & Takeaways</h4>
                        <p>After all the user testing, the design evolved. We went from filtering students with a dropdown menu, to tabs, and then to checkboxes. Watching the users try out the
                            website provided insightful feedback. We thought that a dropdown with "Everyone" labeled on it was easy to understand but testing showed us that visitors to the website
                            did not immediately understand what that meant. Remembering the primary goal of a product and thinking about the user is vitally important and informs good design choices
                            ultimately leading to better user experience and a better product.
                        </p>
                            
                    </Col>
                </Row>
            </Container>
        </>
    )
}