import React from 'react'
import '../Style.css'
import { Link } from 'react-router-dom';
import inputImg from './input.png';
import resultImg from './result.png'

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
                                <Link to='/about'><p className="li-btn li-btn-active" id="about">Docs</p></Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="s2">
                    <div className="sub-container">
                        <h1>What is a Sleep Tracker??</h1>
                        <p>Sleep tracker is a tool made by <a href="http://hitchhicker.tech/"><b>Hitch Hicker</b></a> and <a href="http://karan-munjani.tech/"><b>Karan Munjani.</b></a> This tool will help you to track your sleep in a better way. This tool is based on the rule of 4 Stages of Sleep. By the end of each stage, we found the total time of a single cycle is 90 minutes. So to get the better sleep you should manage your sleeping schedule according to these sleeping cycles.
And Sleep Tracker tool will help you to figure it out.</p>
                        <h1>How to use??</h1>
                        <p>We have made this tool as handy as user friendly.</p>
                        <img src={inputImg} alt=""/>
                        <ol>
                            <li><b>select mode:</b> There are two different modes one is for sleeping time and the second is for wake-up timing.</li><br/>
                            <li><b>Enter time:</b> Now you have to enter time according to your schedule.</li><br/>
                            <li><b>Get the result:</b> After clicking the button you will see <a href='https://www.verywellhealth.com/the-four-stages-of-sleep-2795920'><b>4 different schedules</b></a> which you can follow.</li>
                        </ol>
                        <h1>How to follow the schedule??</h1>
                        <p>Each sleep cycle schedule contains 3 different pieces of information.</p>
                        <img src={resultImg} alt=""/>
                        <ol>
                            <li><b>Sleep/WakeUp at:</b> This field will suggest at which time you should sleep/WakeUp.</li><br/>
                            <li><b>Total Sleep cycles:</b> This field shows how many sleep cycles you will complete if you follow this schedule.</li><br/>
                            <li><b>Total Hours:</b> This field shows how many hours of sleep you will get if you follow this schedule.</li>
                        </ol>
                        <p>If you find this tool helpful then encourage developers by giving  ❤️ Follow <a href='https://www.instagram.com/hitchhicker.tech/'>Hitch Hicker</a> and <a href='https://www.instagram.com/d_krn__/'>Karan Munjani</a> on Instagram to stay in touch. Have a good sleep 🤗</p>
                    </div>
                </section>
                <footer id="footer">© Copyright 2020, Template Designed By <a href="http://karan-munjani.tech/">Karan Munjani</a></footer>
                {/* <footer id="footer">© Copyright 2020, Design By Karan Munjani</footer> */}
            </div>  
        </div>


    )
}

export default About
