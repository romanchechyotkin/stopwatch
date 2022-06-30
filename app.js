// buttons
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

// time items
const hourNode = document.querySelector('.hours')
const minutNode = document.querySelector('.minuts')
const secondNode = document.querySelector('.seconds')
const milisecondNode = document.querySelector('.miliseconds')

// time vars
let miliseconds = 0
let seconds = 0
let minuts = 0
let hours = 0
let interval


// events
startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval)
    miliseconds = 0
    milisecondNode.textContent = '00'
    seconds = 0
    secondNode.textContent = '00'
    minuts = 0
    minutNode.textContent = '00'
    hours = 0
    hourNode.textContent = '00'
})

// init function
function startTimer(){
    miliseconds += 1
    milisecondNode.textContent = `${checkForZero(miliseconds)}`
    if(miliseconds > 99){
        seconds += 1
        miliseconds = 0
        milisecondNode.textContent = '00'
        secondNode.textContent = `${checkForZero(seconds)}`
    }
    if(seconds > 59){
        seconds = 0
        secondNode.textContent = `00`
        minuts += 1
        minutNode.textContent = `${checkForZero(minuts)}`
    }
    if(minuts > 59){
        minuts = 0
        minutNode.textContent = '00'
        hours += 1
        hourNode.textContent = `${checkForZero(hours)}`
    }
}

const checkForZero = (num) => {
    if(num < 10){
        return `0${num}`
    } else {return num} 
}
