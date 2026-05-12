const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
let count = 301;

studentForm.addEventListener("submit", function(e){

    e.preventDefault();
    count+=1;
    let name = document.getElementById("name").value;
    let studentClass = document.getElementById("class").value;
    let phone = document.getElementById("phone").value;

    let row = `
        <tr>
            <td>${count}</td>
            <td>${name}</td>
            <td>${studentClass}</td>
            <td>${phone}</td>
            <td><span class="badge bg-success">Active</span></td>
            <td>
                <button class="btn btn-warning btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        </tr>
    `;

    studentTable.innerHTML += row;

    studentForm.reset();

    alert("Student Added Successfully");
});

studentTable.addEventListener("click", function(e){

    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.parentElement.remove();
    }
});