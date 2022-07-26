const body = document.querySelector("body");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    fetch("http://localhost:2121/crud")
        .then((res) => res.json())
        .then((res) => createTable(res));

});


function createTable(arr) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const trhead = document.createElement("tr");
    for (const key in arr[0]) {
        const th = document.createElement("th");
        th.innerText = key;
        trhead.append(th);

    }
    thead.append(trhead);
    table.append(thead);

    arr.forEach(createRow);
    function createRow(student) {
        const tr = document.createElement("tr");
        for (const key in student) {
            const td = document.createElement("td");
            td.innerText = student[key];
            tr.append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
    body.append(table);

}