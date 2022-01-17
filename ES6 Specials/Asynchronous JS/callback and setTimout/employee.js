let employees=[{id:101, name:"Sam", sal: 34000},
               {id:102, name:"Zayd", sal:45000}]
let create_employee=(emp)=>{
    setTimeout(()=>{
        employees.push(new_data)
    })    
}
let new_data={id:103, name: "Sakura", sal:37000}
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