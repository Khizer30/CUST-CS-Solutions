import { NavigateFunction, useNavigate } from "react-router-dom" ;

function NoPage(): JSX.Element
{
  // Variable
  const navigate: NavigateFunction = useNavigate() ;

  // Title
  document.title = "404" ;

  // Link
  const linkTo = (x: string): void =>
  {
    navigate(x) ;
  }

  return (
  <>
    <div className="container-fluid noPageContainer">
      <i title="Go Back!" className="material-icons noPageIcon" onClick={ () => linkTo("/") }> error </i>
      <h1 className="noPageH1"> 404 </h1>
      <h1 className="noPageH2"> Page Does Not Exists! </h1>
    </div>
  </>
  ) ;
}

// Export NoPage
export default NoPage ;