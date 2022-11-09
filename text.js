// new Date () مثال تطبيقي علي الساعه باستخدام 

function showTime() {
    var date = new Date;
    var hours = date.getHours();
    var mins = date.getMinutes();
    var second = date.getSeconds();
    var timeZone = "PM";


    if (hours === 0) {
        hours = 12;
        timeZone = "AM"

    } else if (hours > 12) {
        hours = hours - 12;
        timeZone = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    mins =  (mins < 10) ? "0" + mins : mins;
    second = (second < 10) ? "0" + second : second;


    var time = hours + " : " + mins + " : " + second + " " + timeZone;
    document.getElementById("displayClock").innerHTML = time;
    setTimeout(showTime , 1000);   // to make the clock dynamic every 1 second = 1000 millisecond

}
showTime();

////////////////////////////////////////////////////////////////////////////////
// Tirnary operator بدلاً من الــ  if,else طريقه اخري لعرض الساعه باستخدام  



// function showTime () {
//     var date = new Date();
//     var hours = date.getHours();
//     var mins = date.getMinutes();
//     var sec = date.getSeconds();

//     var timeZone = "PM";



//     if (hours === 0) {
//         hours = 12;
//         timeZone = "AM";

//     } else if (hours > 12) {
//         hours = hours - 12;
//         timeZone = "PM";

//     } else {
//         timeZone = "AM";
//     }






//     if (hours < 10) {
//         hours = "0" + hours;
//     } else {
//         hours = hours;
//     }
    
    
//     if (mins < 10) {
//         mins = "0" + mins;
//     } else {
//         mins = mins;
//     }
    
//     if (sec < 10) {
//         sec = "0" + sec;
//     } else {
//         sec = sec;
//     }




//     var time = hours + " : " + mins + " : " + sec + "  " + timeZone;
//     document.getElementById("displayClock").innerHTML = time;
//     setTimeout(showTime , 1000);
// }
// showTime ();

////////////////////////////////////////////////////////////////////////////////
