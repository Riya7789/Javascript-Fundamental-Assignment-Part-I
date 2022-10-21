function tmClock(){
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById('clock').innerText = `${hour} : ${minutes} : ${seconds}`
    setTimeout(tmClock,1000);
}