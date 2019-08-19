
function init(){
    let chrone = new Chrono();
    let element = document.getElementById("currentTime");
    chrone.subscribe((time)=>{
        element.innerText = time; 
    });
    chrone.start();
}

class Chrono{
    currentTme = 0;
    timeInterval = null;
    observers = [];
    start = function (){
        let chron = this;
        this.timeInterval  = setInterval( 
            () => {
                chron.currentTme += 100;
                chron.observers.forEach( observer =>{
                    observer(chron.currentTme);
                });
            }, 100);
    }

    subscribe =function(observer){
        this.observers.push(observer);
    }
}

window.onload = init;