const startBtn = document.getElementById('btn')
const btnsDiv = document.querySelector('.buttons')
const time = document.getElementById('time')
let sec = 1

function start(){
    const stopBtn = document.createElement('button')
    stopBtn.textContent = 'stop'
    stopBtn.classList.add('btn')
    stopBtn.classList.add('.stop')
    btnsDiv.appendChild(stopBtn)

    stopBtn.addEventListener('click', stop)

    function stop(){
        const resetBtn = document.createElement('button')
        resetBtn.textContent = 'reset'
        resetBtn.classList.add('btn')
        btnsDiv.appendChild(resetBtn)

        function reset(){
            time.textContent = "00:00:00"
            btnsDiv.removeChild(stopBtn)
            btnsDiv.removeChild(resetBtn)
            resetBtn.removeEventListener('click', reset)
            startBtn.addEventListener('click',  start)
        }

        resetBtn.addEventListener('click', reset)    
        stopBtn.removeEventListener('click', stop)
    }

    startBtn.removeEventListener('click', start)
}
startBtn.addEventListener('click',  start)