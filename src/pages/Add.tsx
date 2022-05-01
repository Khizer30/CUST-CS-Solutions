import { useState } from "react" ;
import { update, ref } from "firebase/database" ;
import { database } from "../firebase" ;

function Add(): JSX.Element
{
  // Inputs Interface
  interface Inputs
  {
    course: string ;
    topic: string ;
    task: string ;
    code: string ;
  }

  // PostData Interface
  interface PostData
  {
    Code: string ;
  }

  const obj: Inputs =
  {
    course: "",
    topic: "",
    task: "",
    code: ""
  }

  // Variables
  const [inputs, setInputs] = useState(obj) ;
  // ...
  const [mes, setMes] = useState("") ;
  const [mesType, setMesType] = useState("alert-danger") ;
  const [show, setShow] = useState(false) ;

  // Title
  document.title = "Add Code" ;
  
  // Handle Input
  const handleChange = (event: any): void =>
  {
    setInputs(values => ({ ...values, [event.target.name]: event.target.value })) ;
  }
  
  // Handle Bug
  const handleSubmit = (event: any): void =>
  {
    event.preventDefault() ;
  }

  // Check Input
  const checkIt = (it: string, len: number): boolean =>
  {
    if (it !== "")
    {
      if (it.length <= len)
      {
        return true ;
      }
      else
      {
        setMes("Lengthy Input!") ;
        setMesType("alert-danger") ;
        setShow(true) ;
        return false ;
      }
    }
    else
    {
      setMes("Don't Leave Any Empty Field!") ;
      setMesType("alert-danger") ;
      setShow(true) ;
      return false ;
    }
  }

  // Check Select
  const checkSelect = (it: string): boolean =>
  {
    if (it !== "")
    {
      return true ;
    }
    else
    {
      setMes("Don't Leave Any Empty Field!") ;
      setMesType("alert-danger") ;
      setShow(true) ;
      return false ;
    }
  }

  // Button Click Function
  const send = (): void =>
  {
    if (checkSelect(inputs.course) && checkIt(inputs.topic, 50) && 
    checkIt(inputs.task, 50) && checkIt(inputs.code, Infinity))
    {
      addCode() ;

      setMes("Code Added To Database!") ;
      setMesType("alert-success") ;
      setShow(true) ;
    }
  }

  // Add Code To Database
  const addCode = (): void =>
  {
    const postData: PostData =
    {
      Code: inputs.code
    } ;

    update(ref(database, "/" + inputs.course + "/" + inputs.topic + "/" + inputs.task), postData) ;
  }

  return (
  <>
    <div className="container-fluid mainContainer">
      <h1 className="mainHeader2"> Add Code to Database </h1>
      <form action="" method="post" target="_self" encType="application/x-www-form-urlencoded" 
      autoComplete="off" noValidate onSubmit={ handleSubmit }>

      { show &&
        <div role="alert" className={ "alert alert-dismissible marginTB " + mesType }>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          <span> { mes } </span>
        </div>
      }
      
        <select name="course" value={ inputs.course } onChange={ handleChange } autoFocus required className="form-select inputs1">
          <option value="" disabled className="inputs1 displayNone"> Select a Course </option>
          <option value="ITP" className="inputs1"> ITP </option>
          <option value="OOP" className="inputs1"> OOP </option>
        </select>

        <div className="form-floating mb-3 mt-3">
          <input 
            name="topic" 
            value={ inputs.topic } 
            onChange={ handleChange } 
            type="text" 
            maxLength={ 50 }
            placeholder="Topic"
            inputMode="text"
            required
            className="form-control inputs1"
          />
          <label htmlFor="topic"> Topic </label> 
        </div>

        <div className="form-floating mb-3 mt-3">
          <input 
            name="task" 
            value={ inputs.task } 
            onChange={ handleChange } 
            type="text" 
            maxLength={ 50 }
            placeholder="Task"
            inputMode="text"
            required
            className="form-control inputs1"
          />
          <label htmlFor="task"> Task </label> 
        </div>

        <textarea name="code" value={ inputs.code } onChange={ handleChange } wrap="soft" required className="form-control inputs2"></textarea>

        <button type="button" onClick={ send } className="btn btn-primary mainButton"> Submit </button>

      </form>
    </div>
  </>  
  ) ;
}

// Export Add
export default Add ;