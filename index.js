let myform = document.querySelector('form');
let inptask = document.getElementById('task');
let priority = document.getElementById('priority');
let tbody = document.querySelector('tbody');
let alldata = [];
myform.addEventListener('submit',function(abc)

{
    abc.preventDefault();
    let data = {};
    data.input1 = inptask.value;
    data.input2 = priority.value;
    alldata.push(data);
    tbody.innerHTML = null;
    // tbody.preventDefault();
    alldata.map((element) =>
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 =  document.createElement('td');
        // console.log(Element.input1);
        td1.innerText = element.input1;
        td2.innerText = element.input2;
        row.append(td1,td2)
        tbody.append(row);
    })

})