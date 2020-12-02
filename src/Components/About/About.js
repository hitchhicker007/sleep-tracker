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
                                <Link to='/'><a id="def" className="li-btn">Tracker</a></Link>
                            </li>
                            <li>
                                <Link to='/about'><a className="li-btn li-btn-active" id="about">About</a></Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="s2">
                    <div className="sub-container">
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam rerum quidem perferendis repellat eligendi minima adipisci est asperiores delectus. Accusamus quas voluptate illum nemo commodi cum porro amet ratione!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime neque id quasi nobis! Necessitatibus dicta voluptas itaque placeat, dolores sit natus voluptates quasi aut fuga doloremque ullam, omnis cupiditate maxime?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime neque id quasi nobis! Necessitatibus dicta voluptas itaque placeat, dolores sit natus voluptates quasi aut fuga doloremque ullam, omnis cupiditate maxime?</p>
                    </div>            
                </section>
                <footer id="footer">© Copyright 2020, Template Designed By <a href="http://karan-munjani.tech/">Karan Munjani</a></footer>
                {/* <footer id="footer">© Copyright 2020, Design By Karan Munjani</footer> */}
            </div>  
        </div>


    )
}

export default About
