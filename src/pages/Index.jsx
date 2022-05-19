import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserRegistration from "./UserRegistration";
import Login from "./Login";
import CompanyRegistration from "./CompanyRegistration";
import Confirmemail from "./ConfirmEmail";
import DashBoard from "./DashBoard";
import Startbiding from "./StartBiding";
import EmptystartBidding from "./EmptyStartBidding";
import StartBiddingFilled from "./StartBiddingFilled";
import Withdrawpopup from "./Withdrawpopup";
import Transactions from "./Transactions";
import Profile from "./Profile";
import Banksetting from "./Banksetting";
import Bankverification from "./Bankverification";
import AddBank from "./AddBank";


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userregistration" element={<UserRegistration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/companyregistration" element={<CompanyRegistration />}></Route>
        <Route path="/confirmEmail" element={<Confirmemail/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/startbiding" element={<Startbiding/>}></Route>
        <Route path="/emptystartbidding" element={<EmptystartBidding/>}></Route>
        <Route path="/startbiddings" element={<StartBiddingFilled/>}></Route>
        <Route path="/transactions" element={<Transactions/>}></Route>
        <Route path="/withdraw" element={<Withdrawpopup/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/banksetting" element={<Banksetting/>}></Route>
        <Route path="/verification" element={<Bankverification/>}></Route>
        <Route path="/addBank" element={<AddBank/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}
