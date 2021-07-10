import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Portal from "./components/Portal";
import Login from "./components/Login";
import Home from "./components/Home";

 export const routing = (
   <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link className="navbar-brand" to="/">
        Emplyee
       </Link>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
             <Link className="nav-link" to="/Portal">
           Portal
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/Home">
             Home 
             </Link>
           </li>

           <li className="nav-item">
             <Link className="nav-link " to="/Login">
               Login
             </Link>
           </li>
         </ul>
       </div>
     </nav>

     <Switch>
       <Route path="/" exact>
         {" "}
         <Home/>{" "}
       </Route>
       <Route path="/Home" component={Home} />
       <Route path="/Portal" component={Portal} />
       <Route path="/Login" component={Login} />
     </Switch>
   </BrowserRouter>
 );
