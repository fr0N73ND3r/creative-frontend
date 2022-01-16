import "./assets/bootstrap_386/css/bootstrap.css"
import "./App.css"
import TaskManager from "./components/todo/TaskManager"
import Navbar from "./components/Navbar"
import Hello from "./components/Hello"

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <div className="container">
        <Hello />
      </div>
      <hr />
      <TaskManager />
    </div>
  )
}

export default App
