
const API = "http://localhost:3000/students"


let currentPage = 1;
let rowsPerPage = 5;
let editId = null;



const getStudents = async () => {
    let res = await fetch(API)
    let data = await res.json()
    displayStudents(data)
    applyAll(data)
}

getStudents();


const displayStudents = (data) => {

    let html = ""

    data.forEach((s) => {
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
                            ${s.fees}
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
    })

    document.getElementById("student_data").innerHTML = html
}

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

    document.getElementById('crud-modal1').classList.remove('hidden');
    document.getElementById('crud-modal1').classList.add('flex');
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

/* search function */



const applyAll = () => {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let courseFilter = document.getElementById("dropdown").value;

    let filtered = allStudents.filter((s) => {
        // Search logic: Name ya Email mein check karein
        let matchSearch = s.name.toLowerCase().includes(searchValue) ||
            s.email.toLowerCase().includes(searchValue);

        // Filter logic
        let matchCourse = courseFilter === "" || s.course === courseFilter;

        return matchCourse && matchSearch;
    });

    paginate(filtered);
};

const paginate = (data) => {
    let start = (currentPage - 1) * rowsPerPage;
    let paginatedData = data.slice(start, start + rowsPerPage);

    displayStudents(paginatedData);
    setupPagination(data.length); // Total count pass karein
};

const setupPagination = (totalItems) => {
    let pageCount = Math.ceil(totalItems / rowsPerPage);
    let buttonHtml = "";

    for (let i = 1; i <= pageCount; i++) {
        buttonHtml += `<button class="px-3 py-1 m-1 border ${currentPage === i ? 'bg-brand text-white' : ''}" 
                        onclick='changePage(${i})'>${i}</button>`;
    }

    document.getElementById("pagination").innerHTML = buttonHtml;
};

const changePage = (page) => {
    currentPage = page;
    applyAll();
};

// Event Listeners (Check karein ki IDs HTML se match karti ho)
document.getElementById('search').addEventListener("input", () => {
    currentPage = 1;
    applyAll();
});

document.getElementById("dropdown").addEventListener("change", () => {
    currentPage = 1;
    applyAll();
});
