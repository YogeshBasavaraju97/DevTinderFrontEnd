import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { Toaster } from "react-hot-toast";
import Connection from "./components/Connection";
import Request from "./components/Request";

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
              <Route path="connections" element={<Connection />} />
              <Route path="requests" element={<Request />} />

            </Route>
            <Route path="/*" element={<Body />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
