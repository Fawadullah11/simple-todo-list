let clock=document.getElementById("time-list");

function time(){
let months = ["1", "2", "3", "4", "5", "6", "7",
        "8", "9", "10", "11", "12"];
let d= new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
let date=d.getDate();
let namedmonths=months[d.getMonth()]
let year=d.getFullYear()
clock.textContent=("0"+h).substr(0, 2)+':'+("0"+m).substr(0,2)+':'+("0"+s).substr(0,2)+'::'+(date)+'/'+(namedmonths)+'/'+(year);
}
setInterval(time,1000)