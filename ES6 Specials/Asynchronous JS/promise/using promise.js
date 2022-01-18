let employees=[{id:101, name:"Sam", sal: 34000},
               {id:102, name:"Zayd", sal:45000}]
let create_employee=(emp)=>{
    return new Promise((resolve, reject) => {
        let sam = true;
    setTimeout(()=>{
        employees.push(emp)
        sam ? resolve("data inserted successfully"): reject("")
    },3000);// reference to save the data on Database takes around 3 seconds   
    })
}

let get_employee=()=>{
    setTimeout(()=>{
        let rows=" ";
        for (emp of employees){
            rows=rows +`<tr><td> ${emp.id} </td>
                            <td> ${emp.name} </td>
                            <td> ${emp.sal} </td>                            
                        </tr>`;
        }
        document.getElementById("data").innerHTML=rows;
    },1000)//to print data after 1 second for the reference of getting data from DataBase
}
create_employee({id:103, name: "Hashira", sal: 50000})
.then((msg) => {
    console.log(msg); 
    get_employee();
})
.catch((er) => {
    console.log(er);
})