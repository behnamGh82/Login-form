import { useState } from "react";
import "./assets/fontawesome-free-6.5.1-web/css/all.css";
import FarawinLogo from "./assets/images/farawin-logo.png";
export default function App() {
  return (
    <div className="bg-[#dde5f4] h-screen flex place-items-center">
      <Forms />
    </div>
  );
}
function Forms() {
  const [loginPage, setLoginPage] = useState(true);
  const handlePage = () => {
    setLoginPage(!loginPage);
  };
  return (
    <div className=" w-3/4 lg:w-2/6  m-auto h-3/4 bg-[#f1f7fe] shadow-lg rounded-3xl relative">
      <div className="w-16 h-16 bg-[#3d4785] absolute -top-6 -right-[20px] rounded-full border-8 border-[#f1f7fe] ">
        <img src={FarawinLogo} alt="" />
      </div>
      {/* login form */}
      {loginPage == true && (
        <div className="flex flex-col place-items-center pt-28  gap-12 h-full">
          <div className="flex flex-col gap-3 bg-white w-2/3 h-20 rounded-xl px-4 shadow-lg">
            <label className="text-[#8f8f8f]"> موبایل</label>
            <div className="flex gap-2 place-items-center ">
              <i className="fa fa-phone text-[#8f8f8f]"></i>
              <input
                type="text"
                className="focus:outline-none"
                placeholder="**** *** **09"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-white w-2/3 h-20 rounded-xl px-4 shadow-lg">
            <label className="text-[#8f8f8f]"> رمز</label>
            <div className="flex gap-2 place-items-center ">
              <i className="fa fa-lock text-[#8f8f8f]"></i>
              <input
                type="password"
                className="focus:outline-none"
                placeholder="*******"
              />
            </div>
          </div>
          <button className="w-2/3 h-16  bg-[#3d4785] text-white rounded-full">
            ورود
          </button>
          <a
            className="underline decoration-indigo-500 text-indigo-500 hover:text-xl"
            onClick={handlePage}
          >
            ثبت نام
          </a>
        </div>
      )}
      {/* register form */}
      {loginPage == false && (
        <div className="flex flex-col place-items-center pt-20  gap-12 h-full">
          <div className="flex flex-col gap-3 bg-white w-2/3 h-20 rounded-xl px-4 shadow-lg">
            <label className="text-[#8f8f8f]"> موبایل</label>
            <div className="flex gap-2 place-items-center ">
              <i className="fa fa-phone text-[#8f8f8f]"></i>
              <input
                type="text"
                className="focus:outline-none"
                placeholder="**** *** **09"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-white w-2/3 h-20 rounded-xl px-4 shadow-lg">
            <label className="text-[#8f8f8f]"> رمز</label>
            <div className="flex gap-2 place-items-center ">
              <i className="fa fa-lock text-[#8f8f8f]"></i>
              <input
                type="password"
                className="focus:outline-none"
                placeholder="*******"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-white w-2/3 h-20 rounded-xl px-4 shadow-lg">
            <label className="text-[#8f8f8f]">تکرار رمز</label>
            <div className="flex gap-2 place-items-center ">
              <i className="fa fa-lock text-[#8f8f8f]"></i>
              <input
                type="password"
                className="focus:outline-none"
                placeholder="*******"
              />
            </div>
          </div>
          <button className="w-2/3 h-16  bg-[#3d4785] text-white rounded-full">
            ثبت نام
          </button>
          <a
            className="underline decoration-indigo-500 text-indigo-500 hover:text-xl"
            onClick={handlePage}
          >
            ورود
          </a>
        </div>
      )}
    </div>
  );
}
