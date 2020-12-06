import React from 'react'
import '../Style.css'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='container'>  
            <div className="sub-container">
                <header>
                    <Link to='/'><p id="logo">Sleep Tracker🌙</p></Link>
                    <nav id="menu">
                        <ul>
                            <li>
                                <Link to='/'><p id="def" className="li-btn">Tracker</p></Link>
                            </li>
                            <li>
                                <Link to='/about'><p className="li-btn li-btn-active" id="about">About</p></Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="s2">
                    <div className="sub-container">
                        <h1>What is a Sleep Tracker??</h1>
                        <p>Sleep tracker is a tool made by <a href="http://hitchhicker.tech/">Hitch Hicker</a> and <a href="http://karan-munjani.tech/">Karan Munjani.</a> This tool will help you to track your sleep in a better way. This tool is based on the rule of 4 Stages of Sleep. By the end of each stage, we found the total time of a single cycle is 90 minutes. So to get the better sleep you should manage your sleeping schedule according to these sleeping cycles.
And Sleep Tracker tool will help you to figure it out.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime neque id quasi nobis! Necessitatibus dicta voluptas itaque placeat, dolores sit natus voluptates quasi aut fuga doloremque ullam, omnis cupiditate maxime?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime neque id quasi nobis! Necessitatibus dicta voluptas itaque placeat, dolores sit natus voluptates quasi aut fuga doloremque ullam, omnis cupiditate maxime?</p>
                    </div>            
                </section>
                <footer id="footer">© Copyright 2020, Template Designed By <a href="https://karan-munjani.tech/">Karan Munjani</a></footer>
                {/* <footer id="footer">© Copyright 2020, Design By Karan Munjani</footer> */}
            </div>  
        </div>


    )
}

export default About
