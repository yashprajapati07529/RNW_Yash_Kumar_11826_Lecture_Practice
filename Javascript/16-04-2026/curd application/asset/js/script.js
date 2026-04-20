const API = "http://localhost:3000/students"

let studentData = [];
let currentPage = 1;
let rowsPerPage = 5;
let editId = null;
let sortType = "";

console.log(studentData);



/* get students */


const getStudents = async () => {
    let res = await fetch(API)
    let data = await res.json()
    studentData.push(data)
    console.log(data);
}

getStudents();

/* search function */

const applyAll = (data) => {

    let search = document.getElementById("search").value.toLowerCase();

    let courseFilter = document.getElementById("dropdown").value

    let filtered = data.filter((c) => {
        let matchSearch = c.name.toLowerCase().includes(search) || s.email.toLowerCase().includes(search)


        let matchCourse = courseFilter === "" || c.course === courseFilter

        return matchCourse && matchSearch
    })

    paginate(filtered)
}

const paginate = (data) => {
    let start = (currentPage - 1) * rowsPerPage
    let paginated = data.slice(start, start + rowsPerPage)

    displayStudents(paginated)

}

// const setupPagination = () => {

//     let pageCount = Math.ceil(totalItem / rowsPerPage)

//     let button = ""

//     for(let i = 0; i <= pageCount; i++){
//         button += `<button onclick='changePage(${i})'>${i}</button>`
//     }

//     document.getElementById("pagination").innerHTML = button
// }

const changePage = () => {
    currentPage = page
    applyAll()
}



const displayStudents = (data) => {

    console.log("displayStudent", studentData[1]);


    let html = ""

    studentData[0].forEach((s) => {
        html += `

    <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="table-checkbox-21" type="checkbox" value=""
                                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                                <label for="table-checkbox-21" class="sr-only">Table checkbox</label>
                            </div>
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            ${s.name}
                        </td>
                        <td class="px-6 py-4">
                            ${s.grid}
                        </td>
                        <td class="px-6 py-4">
                            ${s.course}
                        </td>
                        <td class="px-6 py-4">
                            $${s.fees}
                        </td>
                        <td class="px-6 py-4">
                            ${s.age}
                        </td>
                        <td class="px-6 py-4">
                            ${s.email}
                        </td>
                        <td class="px-6 py-4">
                            <button data-modal-target="crud-modal1" data-modal-toggle="crud-modal1"
                                class="bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                                data-modal-target="crud-modal1" data-modal-toggle="crud-modal1"
                                type="button"  onclick="editStudent('${s.id}')">
                                Edit
                            </button>
                            <button  onclick="deleteStudent('${s.id}')" class="bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Delete</button>
                        </td>
    </tr>
    `
    });

    document.getElementById("student_data").innerHTML = html
}

displayStudents()

let addForm = document.querySelector("#crud-modal form")

addForm.addEventListener("submit", async (e) => {
    e.preventDefault()


    let name = document.getElementById("name")
    let grid = document.getElementById("grid")
    let course = document.getElementById("course")
    let fees = document.getElementById("fees")
    let age = document.getElementById("age")
    let email = document.getElementById("email")


    let student = {
        name: name.value,
        grid: grid.value,
        course: course.value,
        fees: fees.value,
        age: age.value,
        email: email.value
    }

    console.log('student', student);

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })


    getStudents()

    e.target.reset()
})


const deleteStudent = async (id) => {

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    })

    await getStudents()

}

// Edit students

const editStudent = async (id) => {
    editId = id

    let res = await fetch(`${API}/${id}`)
    let data = await res.json()


    document.querySelector("#crud-modal1 #name").value = data.name
    document.querySelector("#crud-modal1 #grid").value = data.grid
    document.querySelector("#crud-modal1 #course").value = data.course
    document.querySelector("#crud-modal1 #fees").value = data.fees
    document.querySelector("#crud-modal1 #age").value = data.age
    document.querySelector("#crud-modal1 #email").value = data.email
}

let editForm = document.querySelector("#crud-modal1 form")


editForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    let updated = {
        name: document.querySelector("#crud-modal1 #name").value,
        grid: document.querySelector("#crud-modal1 #grid").value,
        course: document.querySelector("#crud-modal1 #course").value,
        fees: document.querySelector("#crud-modal1 #fees").value,
        age: document.querySelector("#crud-modal1 #age").value,
        email: document.querySelector("#crud-modal1 #email").value
    }

    console.log("updated", updated);


    await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated)
    })

    getStudents()
})


document.getElementById('search').addEventListener("input", () => {
    currentPage = 1;
    applyAll()
})

document.getElementById("filterCourse").addEventListener("change", () => {
    currentPage = 1
    applyAll()
})