import React from 'react';
import SectionTitle from './section-title';
import MyInfo from './info';
import CvDownload from './download-cv-btn';

const AboutMe = () => {
    return (
        <div id="AboutMe" className="bg-[#191919]">
            <SectionTitle />
            <MyInfo />
            <CvDownload />
        </div>
    )
}

export default AboutMe;