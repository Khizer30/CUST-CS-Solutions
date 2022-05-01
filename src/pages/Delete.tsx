import { useState } from "react" ;
import { ref, remove } from "firebase/database" ;
import { database } from "../firebase" ;

function Delete(): JSX.Element
{
  // Variables
  let data: any = JSON.parse(sessionStorage.getItem("data")!) ;
  const [course, setCourse] = useState("NULL") ;
  const [topic, setTopic] = useState("NULL") ;
  const [task, setTask] = useState("NULL") ;
  const [topics, setTopics] = useState([]) ;
  const [tasks, setTasks] = useState([]) ;
  // ...
  const [mes, setMes] = useState("") ;
  const [mesType, setMesType] = useState("alert-danger") ;
  const [show, setShow] = useState(false) ;

  // Title
  document.title = "Delete Code" ;
  
  // Handle Input
  const handleChange = (event: any): void =>
  {
    let name: string = event.target.name ;
    let value: string = event.target.value ;

    if (name === "course")
    {
      setCourse(value) ;

      // Reset
      setTopics([]) ;
      setTasks([]) ;
      setTopic("NULL") ;
      setTask("NULL") ;

      // Get Topics
      for (let x in data[value])
      {
        setTopics((oldArr: any) => [...oldArr, x]) ;
      }
    }
    else if (name === "topic")
    {
      setTopic(value) ;

      // Reset
      setTasks([]) ;
      setTask("NULL") ;

      // Get Tasks
      for (let x in data[course][value])
      {
        setTasks(oldArr => [...oldArr, x]) ;
      }
    }
    else if (name === "task")
    {
      setTask(value) ;
    }
  }

  // Handle Bug
  const handleSubmit = (event: any): void =>
  {
    event.preventDefault() ;
  }

  // Mapper
  const mapper = (x: string): JSX.Element =>
  {
    return (
    <>
      <option value={ x } className="inputs1"> { x } </option>
    </>
    ) ;
  }

  // Check Input
  const checkIt = (it: string): boolean =>
  {
    if (it !== "" && it !== "NULL")
    {
      return true ;
    }
    else
    {
      setMes("Select All Fields!") ;
      setMesType("alert-danger") ;
      setShow(true) ;
    }
  }

  // Delete Code from Database
  const send = (): void =>
  {
    if (checkIt(course) && checkIt(topic) && checkIt(task))
    {
      remove(ref(database, "/" + course + "/" + topic + "/" + task)) ;

      setMes("Code Deleted!") ;
      setMesType("alert-success") ;
      setShow(true) ;

      // Reset
      setTopics([]) ;
      setTasks([]) ;
      setCourse("NULL") ;
      setTopic("NULL") ;
      setTask("NULL") ;
    }
  }

  return (
  <>
    <div className="container-fluid mainContainer">
      <h1 className="mainHeader2"> Delete Code from Database </h1>
      <form action="" method="post" target="_self" encType="application/x-www-form-urlencoded" 
      autoComplete="off" noValidate onSubmit={ handleSubmit }>

      { show &&
        <div role="alert" className={ "alert alert-dismissible marginTB " + mesType }>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          <span> { mes } </span>
        </div>
      }
        
        <select name="course" value={ course } onChange={ handleChange } autoFocus required className="form-select inputs1">
          <option value="NULL" disabled className="inputs1 displayNone"> Select a Course </option>
          <option value="ITP" className="inputs1"> ITP </option>
          <option value="OOP" className="inputs1"> OOP </option>
        </select>

      { (topics.length !== 0) &&
        <select name="topic" value={ topic } onChange={ handleChange } required className="form-select inputs1">
          <option value="NULL" disabled className="inputs1 displayNone"> Select a Topic </option>
        {
          topics.map(mapper)
        }
        </select>
      }

      { (tasks.length !== 0) &&
        <select name="task" value={ task } onChange={ handleChange } required className="form-select inputs1">
          <option value="NULL" disabled className="inputs1 displayNone"> Select a Task </option>
        {
          tasks.map(mapper)
        }
        </select>
      }
       
        <button type="button" onClick={ send } className="btn btn-primary mainButton"> Submit </button>
        
      </form>
    </div>
  </>  
  ) ;
}

// Export Delete
export default Delete ;