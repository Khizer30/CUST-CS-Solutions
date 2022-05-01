import ReactDOM from 'react-dom/client' ;
import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import loadable from "@loadable/component" ;
import { ref, onValue } from "firebase/database" ;
import { database } from './firebase' ;

// ...
import Animation from './pages/Animation' ;
const Navbar = loadable(() => import("./pages/Navbar"), { fallback: <Animation /> }) ;
const Home = loadable(() => import("./pages/Home"), { fallback: <Animation /> }) ;
const ITP = loadable(() => import("./pages/ITP"), { fallback: <Animation /> }) ;
const OOP = loadable(() => import("./pages/OOP"), { fallback: <Animation /> }) ;
const Add = loadable(() => import("./pages/Add"), { fallback: <Animation /> }) ;
const Delete = loadable(() => import("./pages/Delete"), { fallback: <Animation /> }) ;
const Support = loadable(() => import("./pages/Support"), { fallback: <Animation /> }) ;
const NoPage = loadable(() => import("./pages/NoPage"), { fallback: <Animation /> }) ;

// HTML DOM Element
const app: HTMLElement = document.getElementById("app")! ;

function App(): JSX.Element
{
  // Get Data from Firebase
  onValue(ref(database, "/"), (snapshot) => 
  {
    if (snapshot.exists())
    {
      sessionStorage.setItem("data", JSON.stringify(snapshot.val())) ;
    }
    else
    {
      sessionStorage.setItem("data", JSON.stringify([])) ;
    }
  }) ;

  return (
  <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Navbar /> }>
          <Route index element={ <Home /> } />

          <Route path="/itp" element={ <ITP /> } />
          <Route path="/oop" element={  <OOP />} />
          <Route path="/support" element={ <Support /> } />
          <Route path="/add" element={ <Add /> } />
          <Route path="/delete" element={ <Delete /> } />

          <Route path="*" element={ <NoPage /> } />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

// Render
ReactDOM.createRoot(app).render(<App />) ;