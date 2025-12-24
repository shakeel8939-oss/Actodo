import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([
    {
      username: "Shakeel",
      password: "1234",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path="/Signup" element={<Signup users={users} setUsers={setUsers} />}></Route>
          <Route path="/Landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
