
const getData = async () => {
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json()

    console.log(data);

    let html = ""

    data.map((s) => {
        html += `

    <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="table-checkbox-21" type="checkbox" value=""
                                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                                <label for="table-checkbox-21" class="sr-only">Table checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            ${s.name}
                        </th>
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
                                type="button">
                                Edit
                            </button>
                            <a href="#" class="font-medium text-fg-brand hover:underline ms-12">Delete</a>
                        </td>
    </tr>
    `
    })

    document.getElementById("student_data").innerHTML = html

}


function addData(e) {



    let name = document.getElementById("name").value
    let grid = document.getElementById("grid").value
    let course = document.getElementById("course").value
    let fees = document.getElementById("fees").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value


    let formData = {
        name,
        grid,
        course,
        fees,
        age,
        email
    }

    console.log(formData);

    e.preventDefault()

}

getData()
addData()
