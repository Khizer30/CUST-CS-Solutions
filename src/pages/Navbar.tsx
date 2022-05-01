import { Outlet, NavLink, Link, useLocation, Location } from "react-router-dom" ;

function Navbar(): JSX.Element
{
  // Variable
  const location: Location = useLocation() ;

  return (
  <>
    <nav className="navbar navbar-light navbar-expand-md blueBackground">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navHeader"> CUST CS Solutions </Link>
        <button data-bs-toggle="collapse" data-bs-target="#navCol" className="navbar-toggler whiteBackground">
          <span className="visually-hidden"> Toggle Navigation </span>
          <i className="fa fa-navicon blue"></i>
        </button>
        <div className="collapse navbar-collapse" id="navCol">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item marginLR">
              <NavLink to="/itp" className={ "nav-link " + (location.pathname === "/itp" ? "navLinkActive" : "navLink") }> ITP </NavLink>
            </li>

            <li className="nav-item marginLR">
              <NavLink to="/oop" className={ "nav-link " + (location.pathname === "/oop" ? "navLinkActive" : "navLink") }> OOP </NavLink>
            </li>

            <li className="nav-item marginLR">
              <NavLink to="/support" className={ "nav-link " + (location.pathname === "/support" ? "navLinkActive" : "navLink") }> Support </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <Outlet />
  </>
  ) ;
}

// Export Navbar
export default Navbar ;