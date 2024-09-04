async function dataShow(){
    let mytable = `
    <table border = "1px" width="600px" align="center">
    <tr bgcolor="yellow">
    <th>id</th>
    <th>employee</th>
    <th>name</th>
    <th>salary</th>
    <th>city</th>
    </tr>`;

    

let url = "http://localhost:3000/employee";
let myobj = await fetch(url);
console.log(myobj);

let mydata = await myobj.json();
  console.log(mydata);

 mydata.map((key) => {
    mytable += `
    <tr>
    <th>${key.id}</th>
    <th>${key.employee}</th>
    <th>${key.name}</th>
    <th>${key.salary}</th>
    <th>${key.city}</th>
    </tr>
    `;
 });
    mytable += `</table>`;
    document.getElementById("demo").innerHTML = mytable;
}
dataShow();
