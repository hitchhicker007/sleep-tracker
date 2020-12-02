let wake = document.querySelector(".wake");
let sleep = document.querySelector(".sleep")
let inputTime = document.getElementById('appt');
var footer = document.getElementById('footer');





sleep.addEventListener("click",sleepSelector)
wake.addEventListener("click",wakeSelector)
// navButton.addEventListener('click',toggleNav)

function sleepSelector(){
    console.log(sleep)
    inputTime.classList.add("sleep-time")
    inputTime.classList.remove("wake-time")
    sleep.classList.add("btn-active")
    wake.classList.remove("btn-active");



}
function wakeSelector(){
    let inputTime = document.getElementById('appt');
    console.log(wake)
    inputTime.classList.add("wake-time")
    inputTime.classList.add("wake-time")
    inputTime.classList.remove("sleep-time")
    sleep.classList.remove("btn-active")
    wake.classList.add("btn-active");


}




var today = new Date();
var hour = today.getHours().toString()
var min = today.getMinutes().toString();
var currentYear = today.getFullYear().toString();

if(hour<=9){
    hour = `0${hour}`
}

if(min<=9){
    min = `0${min}`
console.log(min)

}

var time = `${hour}:${min}`
console.log(time);

inputTime.setAttribute("value",time);


footer.innerHTML=`<small>&copy; Copyright ${currentYear},  <span> <a href="https://www.linkedin.com/in/karan-munjani-662813173/">Design  By Karan Munjani</a></span></small> `;
/*

wrong way to chnage style of button whenn hovering in and out


let menuBtn = document.getElementById("about")

function styleBtn(x){
  x.setAttribute("style","background-image: linear-gradient(45deg,var(--moon) 50%, transparent 40%);");
  x.setAttribute("style","background-position: 100%;");
  x.setAttribute("style","background-size: 400%;");
  x.setAttribute("style","transition: background 300ms ease-in-out;");

}

function defStyle(){
    x.removeAttribute("style","background-image: linear-gradient(45deg,var(--moon) 50%, transparent 40%);");
    x.removeAttribute("style","background-position: 100%;");
    x.removeAttribute("style","background-size: 400%;");
    x.removeAttribute("style","transition: background 300ms ease-in-out;");
}

/*



// code for slider output

/*
const sleepInput = document.querySelector("#sleep")
const output = document.querySelector(".sleep-output")
output.textContent = sleepInput.value;



sleepInput.addEventListener('input', function() {
    output.textContent = sleepInput.value;
  });
*/


