import React from 'react'

export const Header = () => {
    return (
            <header className="masthead bg-white" id="page-top">
            {/* hide the left & right pattern on mobile devices (d-none d-sm-block) */}
            <div className="masthead-pattern left d-none d-sm-block"/>

            <div className="masthead-words d-none d-sm-block">
            <h1 className="masthead-heading">Turning the complex into simple, beautiful user experiences</h1>
            <h2 className="masthead-subheading">UX DESIGNER & FRONT-END DEVELOPER</h2>
            <p className="masthead-text">I am a designer with management experience that is eager to learn and</p>
            <p className="masthead-text">passionate about crafting more enjoyable user experiences.</p>
            </div>

            <div className="masthead-pattern right d-none d-sm-block"/>


            {/* show only the below on mobile view (d-block d-sm-none) w/cropped pattern */}
            <div className="masthead-words masthead-pattern-mobile mobile-crop d-block d-sm-none">
            <h1 className="masthead-heading">Turning the complex</h1>
            <h1 className="masthead-heading">into simple, beautiful user</h1>
            <h1 className="masthead-heading">experiences</h1>
            <h2 className="masthead-subheading pt-sm-5">UX DESIGNER & FRONT-END DEVELOPER</h2>
            </div>
            </header>
    )
}
