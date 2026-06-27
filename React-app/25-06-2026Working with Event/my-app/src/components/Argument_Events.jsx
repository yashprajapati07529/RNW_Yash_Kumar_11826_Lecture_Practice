export const ShowName = () => {

    const showName = (name, age) => {
        alert(`${name} ${age}`)
    }

    return (
        <>
            <button onClick={() => showName('VIVEK', 89)}>
                Click Me
            </button>
        </>
    )
}


export const DataMap = () => {

    const student = [
        "Rahul",
        "Amit",
        "Rakesh"
    ]

    const handleStudent = (name) => {
        alert(name)
    }

    return (
        <>
            {
                student.map((s, index) => {
                    return (
                        <button key={index} onClick={() => handleStudent(s)}>{s}</button>
                    )
                })
            }
        </>
    )


}

export const Object_Data = () => {
    const student = {
        id: 1,
        name: 'Rahul',
        age: 22
    }

    const showStudent = (data) => {
        console.log(data);
    }

    return (
        <button onClick={() => showStudent(student)}>Show Student</button>
    )
}