import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BasicInfo from "./components/BasicInfo";
import AccountInfo from "./components/AccountInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import VerifyForm from "./components/VerifyForm";
export default function App() {
  const [basicInfo, setBasicInfo] = useState({
    first: "",
    last: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });

  const formValidation = () => {
    let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let addressRegex =
      /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
    return (
      emailRegex.test(basicInfo.email) &&
      basicInfo.password.length > 7 &&
      basicInfo.confirmPassword === basicInfo.password &&
      basicInfo.first.length >= 3 &&
      basicInfo.last.length >= 3 &&
      basicInfo.username.length >= 3 &&
      basicInfo.phone.length > 7 &&
      addressRegex.test(basicInfo.address)
    );
  };
  const handleSubmit = () => {
    alert(Object.values(basicInfo));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          }
        />
        <Route
          path="/account"
          element={
            <AccountInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          }
        />
        <Route
          path="/additional"
          element={
            <AdditionalInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          }
        />
        <Route
          path="/verify"
          element={
            <VerifyForm
              basicInfo={basicInfo}
              setBasicInfo={setBasicInfo}
              handleSubmit={handleSubmit}
              formValidation={formValidation}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
