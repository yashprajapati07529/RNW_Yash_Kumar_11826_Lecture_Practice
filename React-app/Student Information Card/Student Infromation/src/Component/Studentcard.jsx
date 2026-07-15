import React from "react";

const StudentInfo = ({ stddata }) => {



    return (
        <>

            <div>
                <h1>Student Data </h1>

                {stddata.map((student, index) => (
                    <div key={index}>
                        <h2>Student Name: {student.StudentName}</h2>
                        <p>Course: {student.Cousre}</p>
                        <p>Grid Number: {student.GridNum}</p>
                        <p>Email: {student.Email}</p>
                        <p>Phone: {student.phone}</p>
                        <p>Skills: {student.skills}</p>
                        <hr />
                    </div>
                ))}

            </div>
        </>
    )


}

export default StudentInfo;