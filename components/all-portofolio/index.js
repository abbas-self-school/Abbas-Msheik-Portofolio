import React from 'react';
import HomeSection from './../home-section';
import AboutMe from './../about-me';
import MySkills from './../my-skills';
import MyWorks from './../my-works';
import ContactMe from './../contact-me';
import Footer from './../footer';
import ScrollToTop from './../scroll-to-top';

const Portofolio = () => {

    return (
        <div className="flex flex-col w-full">
            <HomeSection />
            <AboutMe />
            <MySkills />
            <MyWorks />
            <ContactMe />
            <Footer />

            <ScrollToTop />
        </div>
    )
}

export default Portofolio;