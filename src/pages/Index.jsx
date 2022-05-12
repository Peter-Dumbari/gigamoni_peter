import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserRegistration from "./UserRegistration";
import Login from "./Login";
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userregistration" element={<UserRegistration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
