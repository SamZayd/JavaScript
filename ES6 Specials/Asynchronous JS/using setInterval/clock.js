
const time = () => {
    const current = new Date();
        
    let hrs= current.getHours();
    let min= current.getMinutes();
    let sec= current.getSeconds();
    let mer= "AM";

    if (hrs == 00){
        hrs = 12
        mer ='AM';
    }
    else if(hrs == 12){
        mer ='PM';
    }
    else if(hrs > 12)
    {
        hrs = hrs-12
        mer ='PM';
    }


    if (sec<10){
        sec="0"+sec;    
    }

    if (min<10){
        min="0"+min;
    }
    
    if (hrs<10){
        hrs="0"+hrs;
    } 
    console.log(hrs,":",min,":",sec,"  ",mer);

    hour.innerHTML=`${hrs}`;
    minute.innerHTML=`${min}`;
    second.innerHTML =`${sec}`;
    merediem.textContent =`${mer}`;
}
setInterval(time,1000)

const hour= document.getElementById("hours");
const minute=document.getElementById("minutes");
const second=document.getElementById("seconds");
const merediem=document.getElementById("merediem");