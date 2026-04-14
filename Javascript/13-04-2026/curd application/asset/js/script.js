
const API = "http://localhost:3000/students"


const getStudents = async () => {
    let res = await fetch(API)
    let data = await res.json()
    displayStudents(data)
    console.log(data);

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
                            $${s.fees}
                        </td>
                        <td class="px-6 py-4">
                            ${s.age}
                        </td>
                        <td class="px-6 py-4">
                            ${s.id}
                        </td>
                        <td class="px-6 py-4">
                            <button data-modal-target="crud-modal1" data-modal-toggle="crud-modal1"
                                class="bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                                type="button">
                                Edit
                            </button>
                            <button onclick="deleteStudent('${s.id}')" class="bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Delete</button>
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
    // 1. Confirmation box (optional but safe)
    if (confirm("Are you sure you want to delete this?")) {
        try {
            // 2. Server se delete karo
            await fetch(`${API}/${id}`, {
                method: "DELETE"
            });

            // 3. UI update karne ke liye list ko dobara fetch karo
            // Ye method dobara 'displayStudents' ko call karega
            await getStudents();

        } catch (error) {
            console.error("Delete failed:", error);
        }
    }
}


