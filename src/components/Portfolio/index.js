import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import ochi from '../../assets/images/Ochi.jpg';
import portfolio3D from '../../assets/images/3DPortfolio.jpg';
import popcorn from '../../assets/images/Usepopcorn.jpg';
import ESS from '../../assets/images/ESS.png';
import ESS2 from '../../assets/images/image.png';
import EE from '../../assets/images/Exclusiveecom.png';


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([
        {
            image: popcorn,
            name: "Usepopcorn - Movie Website",
            description: "A movie website where you can search for movies, view details, and give ratings. Built with React.",
            url: "https://usepopcornwebsite.vercel.app/" 
        },
        {
            image: ochi,
            name: "Ochi Design Clone",
            description: "A frontend website clone of the Ochi design, utilizing GSAP and React ScrollTrigger for animations.",
            url: "https://mooosakhan.github.io/ochi.design_clone/"
        },
        {
            image: portfolio3D,
            name: "3D Portfolio Website",
            description: "A 3D canvas portfolio website created with Three.js for interactive and visually engaging elements.",
            url: "https://mooosakhan.github.io/Portfolio/"
        },
        {
            image: ESS2,
            name: "Exam Scheduling System",
            description: "The Exam Scheduling System is a web application designed to simplify the process of scheduling university exams. (Frontend)",
            url: "https://exam-scheduling-system.vercel.app"
        },
        {
            image: EE,
            name: "Exclusive Ecommerce",
            description: "Exclusive Ecommerce web application designed to simplify the process",
            url: "https://exclusives-ecommerce.vercel.app"
        }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => (
                    <div className="image-box" key={idx}>
                        <img 
                            src={port.image}
                            className="portfolio-image"
                            alt={port.name} 
                        />
                        <div className="content">
                            <p className="title">{port.name}</p>
                            <h4 className="description">{port.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(port.url)}
                            >View</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
