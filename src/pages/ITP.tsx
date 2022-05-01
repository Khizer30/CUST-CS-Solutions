import { useState } from "react" ;
import { Navigate } from "react-router-dom" ;

function ITP(): JSX.Element
{
  // Variables
  let data: any = JSON.parse(sessionStorage.getItem("data")!)["ITP"] ;
  const [code, setCode] = useState("") ;
  // ...
  const [show, setShow] = useState(false) ;

  // Title
  document.title = "ITP Lab Solutions" ;

  // Redirects If Empty
  if (!data)
  {
    alert("Database is Empty!") ;

    return (
    <>
      <Navigate to="/" />
    </>
    ) ;
  }

  // Select Code
  const selectCode = (topic: string, task: string): void =>
  {
    setCode(data[topic][task]["Code"]) ;
    setShow(true) ;
  }

  // Copy Code
  const copy = (): void =>
  {
    navigator.clipboard.writeText(code) ;
    alert("Code Copied To Clipboard!") ;
  }

  const listMapper = (task: string, topic: string): JSX.Element =>
  {
    return (
    <>
      <tr className="bold">
        <td className="tableCell"> { topic } </td>
        <td className="tableCell"> { task } </td>
        <td className="width20">
          <button type="button" onClick={ () => selectCode(topic, task) } className="btn btn-primary tableButton"> Select </button>
        </td>
      </tr>
    </>
    ) ;
  }

  // Mapper
  const mapper = (topic: string): JSX.Element =>
  {
    return (
    <>
    {
      Object.keys(data[topic]).map((task) => listMapper(task, topic))
    }
    </>
    ) ;
  }

  return (
  <>
    <div className="container-fluid d-flex justify-content-center align-items-center mainContainer">
      <div className="ad1"></div>
      <div className="ad1"></div>
      <div className="ad1"></div>
    </div>

    <div className="container-fluid mainContainer">
      <h1 className="mainHeader2"> ITP Lab Solutions </h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="tableHeader">
            <tr>
              <th className="width40"> Topic </th>
              <th className="width40"> Task No. </th>
              <th className="width20"> Code </th>
            </tr>
          </thead>
          <tbody>

          {
            Object.keys(data).map(mapper)
          }

          </tbody>
        </table>
      </div>
    </div>

  { show &&
    <div className="container-fluid mainContainer">
      <div>
        <button type="button" onClick={ copy } className="btn btn-primary mainButton"> Copy To Clipboard </button>
      </div>
      <textarea id="codeTextarea" value={ code } wrap="soft" readOnly className="courseTextarea"></textarea>
    </div>
  }

    <div className="container-fluid d-flex d-sm-flex justify-content-center justify-content-sm-center mainContainer">
      <div className="ad2"></div>
      <div className="ad2"></div>
      <div className="ad2"></div>
    </div>
  </>
  ) ;
}

// Export ITP
export default ITP ;