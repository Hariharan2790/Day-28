
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Usercreate from './Usercreate';
import Userlist from './Userlist';
import Useredit from './Useredit';
import Productlist from './Productlist';
import Productcreate from './Productcreate';
import Productedit from './Productedit';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/create-user" element={<Usercreate />}></Route>
              <Route path="/users" element={<Userlist />}></Route>
              <Route path="/edit-user/:id" element={<Useredit />}></Route>
              <Route path="/products" element={<Productlist />}></Route>
              <Route path="/create-product" element={<Productcreate />}></Route>
              <Route path="/edit-product/:id" element={<Productedit />}></Route>
              

              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
