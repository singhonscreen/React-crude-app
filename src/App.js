import NavBar from "./components/NavBar"
import AllUsers from "./components/AllUsers";
import AddUsers from "./components/AddUsers";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
  <NavBar />
  <Switch>
  < Route exact path ='/' component ={AllUsers}  />
  < Route exact path ='/add' component ={AddUsers}  />
  < Route exact path = '/edit/:id'  component ={EditUser}  />
  < Route  component ={NotFound}  />
  </Switch>
    </BrowserRouter>
  );
}

export default App;
