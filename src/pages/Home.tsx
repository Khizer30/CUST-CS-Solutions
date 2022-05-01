import { NavigateFunction, useNavigate } from "react-router-dom" ;

function Home(): JSX.Element
{
  // Variable
  const navigate: NavigateFunction = useNavigate() ;

  // Title
  document.title = "CUST CS Solutions" ;

  // Link
  const linkTo = (x: string): void =>
  {
    navigate(x) ;
  }

  return (
  <>
    <div className="container-fluid blueBackground">
      <h1 className="mainHeader"> Select Your Course </h1>
      <div className="row">

        <div className="col-md-6 d-flex justify-content-center align-items-center homeColumn" onClick={ () => linkTo("/itp") }>
          <p className="homeOption"> ITP </p>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center homeColumn" onClick={ () => linkTo("/oop") }>
          <p className="homeOption"> OOP </p>
        </div>

      </div>
    </div>
  </>
  ) ;
}

// Export Home
export default Home ;