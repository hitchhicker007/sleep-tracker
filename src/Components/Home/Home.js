import React, { useEffect,useState } from 'react'
import '../Style.css'
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

function Home() {
    const [time,setTime] = useState('');
    const [showCard,setShowCard] = useState(false);
    const [sleepMode,setSleepMode] = useState(false);
    const [firstTime,setFirstTime] = useState(true);
    const [cycleOne,setCycleOne] = useState('');
    const [cycleTwo,setCycleTwo] = useState('');
    const [cycleThree,setCycleThree] = useState('');
    const [cycleFour,setCycleFour] = useState('');

    useEffect(() => {
        let inputTime = document.getElementById('appt');
        var today = new Date();
        var hour = today.getHours().toString()
        var min = today.getMinutes().toString();
        var currentYear = today.getFullYear().toString();

        if(hour<=9){
            hour = `0${hour}`
        }

        if(min<=9){
            min = `0${min}`
        }

        var currentTime = `${hour}:${min}`

        inputTime.setAttribute("value",currentTime);

        if(firstTime){
            setTime(currentTime);
            setFirstTime(false);
        }
    }, [time])

    const wakeHandler = () => {
        let wake = document.querySelector(".wake");
        let sleep = document.querySelector(".sleep")
        let inputTime = document.getElementById('appt');
        inputTime.classList.add("wake-time")
        inputTime.classList.add("wake-time")
        inputTime.classList.remove("sleep-time")
        sleep.classList.remove("btn-active")
        wake.classList.add("btn-active");
        setSleepMode(false);
    }

    const sleepHandler = () => {
        let wake = document.querySelector(".wake");
        let sleep = document.querySelector(".sleep")
        let inputTime = document.getElementById('appt');
        inputTime.classList.add("sleep-time")
        inputTime.classList.remove("wake-time")
        sleep.classList.add("btn-active")
        wake.classList.remove("btn-active");
        setSleepMode(true);
    }

    function timeConvert(num) {
        if(num>1440){
            num = num-1440;
        }
        if(num<0){
            num = 1440 + num;
        }
        var amPm = "AM";
        var hours = Math.floor(num / 60);  
        var minutes = num % 60;
        if(hours>12){
            hours = hours-12;
            amPm = "PM"
        }
        return hours + ":" + (minutes>9 ? "" + minutes : "0"+ minutes) + " " + amPm;
    }

    const resultHandler = e => {
        e.preventDefault();
        setShowCard(true);
        let scroll = Scroll.animateScroll;
        scroll.scrollMore(500);
        console.log(time);
        let hr = parseInt(time.slice(0,2));
        let mins = parseInt(time.slice(3,));
        let totalMins = mins + hr*60;
        console.log(timeConvert(1380));
        if(sleepMode){
            setCycleOne(timeConvert(totalMins+270));
            setCycleTwo(timeConvert(totalMins+360));
            setCycleThree(timeConvert(totalMins+450));
            setCycleFour(timeConvert(totalMins+540));
        }else{
            setCycleOne(timeConvert(totalMins-270));
            setCycleTwo(timeConvert(totalMins-360));
            setCycleThree(timeConvert(totalMins-450));
            setCycleFour(timeConvert(totalMins-540)); 
        }
        
    }

    return (
        <div className="container">
            <section className="s1">
                <div className="sub-container">
                    <header>
                        <Link to='/'><p id="logo">Sleep Tracker🌙</p></Link>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <Link to='/'><p id="def" className="li-btn li-btn-active">Tracker</p></Link>
                                </li>
                                <li>
                                    <Link to='/about'><p className="li-btn" id="about">About</p></Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </section>

            <section className="s2">          
                <div className="sub-container time-grid">
                    <p className="inbed-svg"></p>
                    <form className="card">
                        <div className="time">
                            <button className="btn li-btn btn-active wake" onClick={wakeHandler} type="button">WakeUp At</button>
                            <button className="btn li-btn sleep" onClick={sleepHandler} type="button">Sleep At</button>
                        </div>
                        <input type="time" id="appt" name="appt" className="wake-time" onChange={e=>setTime(e.target.value)} />
                        <button onClick={resultHandler} className="btn btn-submit">Get Sleep Time</button>
                    </form>
                </div>
            </section>

            <section className={showCard ? '' : 'hide'} id='result'>
                <div className="sub-container time-grid result-grid">                    
                    <h2 id="title">To get better sleep you should</h2>
                    <p className="sleep-svg"></p>
                    <div className="results">
                        <div className="result-card">
                            <ul>
                                <li>
                                    <p id="sleepAt">{sleepMode ? 'WakeUp' : 'Sleep'} At: {cycleOne}</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalCycles">Total Sleep cycles: {sleepMode ? '6' : '3'}</p> */}
                                    <p id="totalCycles">Total Sleep cycles: 3</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalHours">Total Hours: {sleepMode ? '9:00' : '4:30'} hrs.</p> */}
                                    <p id="totalHours">Total Hours: 4:30 hrs.</p>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                        <b>OR</b>
                        <div className="result-card">
                            <ul>
                                <li>
                                    <p id="sleepAt">{sleepMode ? 'WakeUp' : 'Sleep'} At: {cycleTwo}</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalCycles">Total Sleep cycles: {sleepMode ? '5' : '4'}</p> */}
                                    <p id="totalCycles">Total Sleep cycles: 4</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalHours">Total Hours: {sleepMode ? '7:30' : '6:00'} hrs.</p> */}
                                    <p id="totalHours">Total Hours: 6:00 hrs.</p>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                        <b>OR</b>
                        <div className="result-card">
                            <ul>
                                <li>
                                    <p id="sleepAt">{sleepMode ? 'WakeUp' : 'Sleep'} At: {cycleThree}</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalCycles">Total Sleep cycles: {sleepMode ? '4' : '5'}</p> */}
                                    <p id="totalCycles">Total Sleep cycles: 5</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalHours">Total Hours: {sleepMode ? '6:00' : '7:30'} hrs.</p> */}
                                    <p id="totalHours">Total Hours: 7:30 hrs.</p>
                                    <span></span>
                                </li>
                            </ul>
                        </div>       
                        <b>OR</b>
                        <div className="result-card">
                            <ul>
                                <li>
                                    <p id="sleepAt">Sleep At: {cycleFour}</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalCycles">Total Sleep cycles: {sleepMode ? '3' : '6'}</p> */}
                                    <p id="totalCycles">Total Sleep cycles: 6</p>
                                    <span></span>
                                </li>
                                <li>
                                    {/* <p id="totalHours">Total Hours: {sleepMode ? '4:30' : '9:00'} hrs.</p> */}
                                    <p id="totalHours">Total Hours: 9:00 hrs.</p>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="s4">
                <div className="sub-container like-grid">
                    <div className="like-card">
                        <p>If You Find This Helpful Then Encourage Creator By Dropping ❤️</p>
                        <div className="links">
                            <p><a href="https://instagram.com/hitchhicker.tech"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></p>
                            <p><a href="https://www.linkedin.com/in/parthpanchal8401/"> <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></p>                    
                            <p><a href="https://github.com/hitchhicker007"> <i className="fa fa-github" aria-hidden="true"></i> Github</a></p>
                        </div>                    
                    </div>
                </div>                
            </section>
            <footer id="footer">© Copyright 2020, Template Designed By <a href="http://karan-munjani.tech/">Karan Munjani</a></footer>
        </div>
    )
}

export default Home
