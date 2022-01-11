function secs(){
    mins()
    hrs()
    let i= 0;
    x=setInterval(()=>{
    console.log(i,"Seconds");
    i=i+1;
    if(i==60){
        clearInterval(x);
        secs()
    }
    },1000)
}

function mins(){
    let j= 0;
    y=setInterval(()=>{
    console.log(j,"Minutes");
    j++;
    if(j==60){
        clearInterval(y);
        mins()
    }
    },60000)
}

function hrs(){
    let k=  1;
    z=setInterval(()=>{
    console.log(k,"Hours");
    k++;
    if(k==12){
        clearInterval(z);
        hrs()
    }
    },3600000)
}
secs()