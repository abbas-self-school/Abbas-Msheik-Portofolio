import React, { useContext } from 'react';
import Navbar from './navbar';
import Particles from 'react-tsparticles';
import MyPic from './picture';
import MyName from './my-name';


const HomeSection = () => {
    return (
        <div className="w-full h-screen relative  overflow-hidden">
            <img src="/imgs/sky.jpg" alt="night sky" className="absolute w-full h-full z-[-5]" />
            <Navbar />
            <MyPic />
            <MyName />
            <div className="z-[-1] absolute w-full h-screen">
                <Particles 
                    id="tsparticles"
                    options={{
                        fullScreen: {
                            enable: true
                        },
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ead014",
                            },
                            links: {
                                color: "#ead014",
                                distance: 80,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 150,
                            },
                            opacity: {
                                value: 0.2,
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default HomeSection
