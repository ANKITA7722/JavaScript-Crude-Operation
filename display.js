async function dataShow(){
    let mytable = `<table border = "1px" width="600px" align="center">
    <tr>
    <th>id</th>
    <th>employee</th>
    <th>name</th>
    <th>salary</th>
    <th>city</t>
    <\tr>`;

    

let url = "http://localhost:3000/employee";
let myobj = await fetch(url);
console.log(myobj);

 Mydata.map((key) => {
    mytable += `
    <tr bgColor="yellow">
    <th>${key.id}</th>
    <th>${key.employee}</th>
    <th>${key.name}</th>
    <th>${key.salary}</th>
    <th>${key.city}</t>
    <\tr>
    `;
 });
    mytable += `</table>`;
    document.getElementById("demo").innerHTML = mytable;
}
dataShow();
