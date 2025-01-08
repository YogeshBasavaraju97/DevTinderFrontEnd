import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Home Page</div>}></Route>
          <Route path="/login" element={<div>login page</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
