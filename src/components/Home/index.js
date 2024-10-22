import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      
        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId)
      }, [])
      

    return (
        <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _12`}>m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
   
      </div>
    )
}

export default Home