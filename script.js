const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
let count = 301;

studentForm.addEventListener("submit", function (e) {

    e.preventDefault();
    count += 1;
    let name = document.getElementById("name").value.trim();
    let studentClass = document.getElementById("class").value.trim();
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

studentTable.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.remove();
    }
});




function addStudent() {

    let name = document.getElementById("studentName").value.trim();
    let course = document.getElementById("studentCourse").value.trim();
    let roll = document.getElementById("studentRoll").value.trim();

    if (name === "" || course === "" || roll === "") {
        alert("Please fill all fields");
        return;
    }


    let card = `
      
        <div class="col-md-4 mb-4">

          <div class="card student-card">

            <div class="card-top">

              <img src="https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}  rounded-circle" 
                class="student-img">

              <h4 class="mt-3">${name}</h4>

            </div>

            <div class="card-body">

              <p>
                <i class="bi bi-book-fill text-primary"></i>
                <strong>Course:</strong> ${course}
              </p>

              <p>
                <i class="bi bi-person-badge-fill text-success"></i>
                <strong>Roll No:</strong> ${roll}
              </p>

              <button class="btn btn-danger w-100"
                onclick="deleteCard(this)">
                Delete
              </button>

            </div>

          </div>

        </div>

      `;

    document.getElementById("studentContainer").innerHTML += card;

    // Clear Inputs
    document.getElementById("studentName").value = "";
    document.getElementById("studentCourse").value = "";
    document.getElementById("studentRoll").value = "";

}

// Delete Card
function deleteCard(button) {
    button.closest(".col-md-4").remove();
}


// total students counter

let number = 1;

    let counter = setInterval(() => {

        document.getElementById("students").innerHTML = number;

        number++;

        if(number > 500){
            clearInterval(counter);
        }

    }, 20);


    let number1 = 1;

    let counter1 = setInterval(() => {

        document.getElementById("teachers").innerHTML = number1;

        number1++;

        if(number1 > 400){
            clearInterval(counter1);
        }

    }, 20);



