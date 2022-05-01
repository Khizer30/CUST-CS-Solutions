function Support(): JSX.Element
{
  // Title
  document.title = "Support Us" ;

  return (
  <>
    <div className="container-fluid blueBackground">
      <h1 className="mainHeader"> Support Us </h1>
    </div>
    <div className="container-fluid d-flex d-md-flex justify-content-center align-items-center justify-content-md-center align-items-md-center supportContainer">
      <div className="d-md-flex justify-content-md-center align-items-md-center">
        <img src="/img/jazzcash.png" alt="JazzCash Logo" className="supportImg" />
        <div className="marginLR5">
          <p className="supportH1"> We Need Your Support To Keep This Website Live! </p>
          <p className="supportH2"> JazzCash Account </p>
          <p className="supportH3"> 03045149450 </p>
        </div>
      </div>
    </div>
  </>
  ) ;
}

// Export Support
export default Support ;