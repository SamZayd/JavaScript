let task = (success, failure)=>{
    let con = true/false;
    if (con){
        success("Success")
    }
    else{
        failure("Failure")
    }
}
task((a) =>{console.log(a);},(b) =>{console.log(b);})

let result =(p, f)=>{
    let score=true;
    if(score){
        p("Passed")
    }
    else{
        f("Failed")
    }
}
result((d) =>{console.log(d);},(n)=>{console.log(n);})