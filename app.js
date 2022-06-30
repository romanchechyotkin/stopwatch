// buttons
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

// time items
const hourNode = document.querySelector('.hours')
const minutNode = document.querySelector('.minuts')
const secondNode = document.querySelector('.seconds')

// time vars
let seconds = 0
let minuts = 0
let hours = 0
let interval


// events
startBtn.addEventListener('click', () => {
    stopBtn.classList.remove('pushed')
    resetBtn.classList.remove('pushed')
    startBtn.classList.add('pushed')
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
})

stopBtn.addEventListener('click', () => {
    startBtn.classList.remove('pushed')
    resetBtn.classList.remove('pushed')
    stopBtn.classList.add('pushed')
    clearInterval(interval)
})

resetBtn.addEventListener('click', () => {
    startBtn.classList.remove('pushed')
    stopBtn.classList.remove('pushed')
    resetBtn.classList.add('pushed')
    clearInterval(interval)
    seconds = 0
    secondNode.textContent = '00'
    minuts = 0
    minutNode.textContent = '00'
    hours = 0
    hourNode.textContent = '00'
})

// init function
function startTimer(){
    seconds += 1
    secondNode.textContent = `${checkForZero(seconds)}`
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
