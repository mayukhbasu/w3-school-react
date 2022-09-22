import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './CollapseSidebar.css';

const CollapseSidebar = () => {
    const sidebar = useRef();
    const content = useRef();
    const [showSidebar, setShowSidebar] = useState(false);

    const displaySidebar = () => {
        if(!showSidebar) {
            sidebar.current.style.display = "block";
            sidebar.current.style.width = "200px";
            content.current.style.marginLeft = "200px"
        } else {
            sidebar.current.style.display = "none";
            sidebar.current.style.width = "0px";
            content.current.style.marginLeft = "0px"
        }
        
        setShowSidebar(!showSidebar);
    }
    return (
        <>
            <div className='collapse-sidebar' ref={sidebar}>
                <a className='active'>Home</a>
                <a>News</a>
                <a>Contact</a>
            </div>
            <div className='collapse-content' ref={content}>
                <i className="fas fa-bars" onClick={displaySidebar}></i>
                <h2>Responsive Sidebar Example</h2>
                <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                <h3>Resize the browser window to see the effect.</h3>
            </div>
        </>
    );
};

export default CollapseSidebar;