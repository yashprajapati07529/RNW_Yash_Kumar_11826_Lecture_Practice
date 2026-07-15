
import './App.css'
import StudentInfo from './Component/Studentcard'

function App() {

  const stddata = [ 
      {
        StudentName : "Tushar",
        Cousre : "Full Stack Devloper",
        GridNum: 10859,
        Email : "pateltuhd@gmail.com",
        phone: 97275525689,
        skills: "C, C++, HTML, CSS"
      },
      {
        StudentName : "Jay",
        Cousre : "WEb Devloper",
        GridNum: 10779,
        Email : "pateltuhd@gmail.com",
        phone: 97275525689,
        skills: "C, HTML, CSS"
      },
      {
        StudentName : "Yash",
        Cousre : "IOS Devloper",
        GridNum: 10259,
        Email : "pateltuhd@gmail.com",
        phone: 97275525689,
        skills: "C, C++, CSS"
      },
      {
        StudentName : "Abhay",
        Cousre : "Front=End Devloper",
        GridNum: 10559,
        Email : "pateltuhd@gmail.com",
        phone: 97275525689,
        skills: "C, C++, CSS, HTML, BOOSTRAP"
      }

  ]

  return (
    <>
     

    <StudentInfo stddata={stddata}/>

    </>
  )
}

export default App
