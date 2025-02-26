import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route
              path="/profile"
              element={
                <div>
                  Profile
                  <Outlet />
                </div>
              }
            >
              <Route path="/profile/navbar" element={<div>Navbar</div>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
