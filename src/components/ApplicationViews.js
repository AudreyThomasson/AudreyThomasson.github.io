import React from 'react'
import { Route } from "react-router-dom"
import { NavBar } from './NavBar';
import { Header } from './Header';
import { Work } from './Work';
import { Connect } from './Connect';
import { NavBarAbout } from './NavBarAbout';
import { About } from './About';
import { NavBarCaseStudy } from './NavbarCaseStudy';
import { TravelShots } from './TravelShots';
import { Process } from './Process';

export const ApplicationViews = () => {
    return (
        <>
            {/* Home / Main Screen*/}
            <Route exact path="/">
                <NavBar />
                <Header />
                <Work />
                <Process />
                <Connect />
            </Route>

            {/* Jump to About Page */}
            <Route exact path="/about">
                <NavBarAbout />
                <About />
                <Connect />
            </Route>

            {/* Jump to TravelShots detail page */}
            <Route path="/travelshots">
                <NavBarCaseStudy />
                <TravelShots />
                <Connect />
            </Route>
        </>
    )
}