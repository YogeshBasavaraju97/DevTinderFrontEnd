import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="login" element={<Login />} />
              <Route path="feed" element={<Feed />} />
              <Route path="profile" element={<Profile />} />
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
