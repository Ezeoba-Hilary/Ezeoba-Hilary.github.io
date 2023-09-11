function UpdateDayAndTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current = new Date();
    const day = days[current.getUTCDay()];
    const time = current.getTime();

    const dayofweek = document.getElementById('today');
    const timenow = document.getElementById('currentTime');

    if (dayofweek && timenow) {
        dayofweek.textContent = day;
        timenow.textContent = time.toString();
    }    
}
document.addEventListener('DOMContentLoaded', function (){
    UpdateDayAndTime();
    setInterval(UpdateDayAndTime, 1000);
});