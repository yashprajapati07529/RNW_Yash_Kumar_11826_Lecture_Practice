
// Importing and Exporting Components

// 1. Split the components further 

import './App.css';
import Gallery from './Gallery';
import Profile from './Profile';
import Convert from './Convert';
import TodoList from './Todolist';
import TodoList1 from './Todolist1';
import TodoList2 from './Todolist2';


function App() {
  return (
    <>
      <h2>1. Split the components further</h2>
      <br />
      <Profile />
      <Gallery />
      <br />
      <h1>Writing Markup with JSX</h1>
      <h2>1. Convert some HTML to JSX</h2>
      <br />
      <Convert />
      <br />
      <h1> JavaScript in JSX with Curly Braces</h1>
      <h2>1. Fix the mistake </h2>
      <TodoList />
      <h2>2. Extract information into an object</h2>
      <TodoList1 />
      <h2>3. Extract information into an object</h2>
      <TodoList2 />
    </>
  );
}

export default App;





