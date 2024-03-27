import { useState } from "react";
import Image from "../assets/signupImg.webp";
import { FaVideo } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEarthSharp } from "react-icons/io5";
import EmailSignUpValidation from "./emailValidations";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const SignUp = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showEmailPassword, setShowEmailPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const { t } = useTranslation();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18next.changeLanguage(language); // Change language using i18next
    setShowLanguageDropdown(false);
  };

  const handleEmailSignUpClick = () => {
    setShowLoader(true);
    // Simulating API call with setTimeout
    setTimeout(() => {
      setShowLoader(false);
      setShowEmailPassword(true);
    }, 2000); // Adjust the duration of loader as needed
  };

  return (
    <main className="bg-[#0f0f0ff1] flex min-h-screen">
      {/* Left sectin  */}
      <section className="flex items-center pt-[5%] flex-col gap-12  max-lg:hidden w-[80%]">
        <h1 className="text-[40px]  font-semibold text-white mt-10 w-1/2   text-center">
          <span className="block">{t("Sign up")}</span>
          {t("and come on in")}
        </h1>
        <img src={Image} alt="ImageSignUpPage" width={450} height={450} />
        <p className="text-white">&copy; Typeform</p>
      </section>
      {/* Rigth Sectin  */}
      <section className="bg-white w-full lg:rounded-l-[22px]  px-4 max-sm:px-1   ">
        <div className="flex justify-between p-3 max-sm:p-1   font-base relative">
          {/* lagauge changer */}
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-gray-800 bg-white text-lg max-md:text-sm flex flex-nowrap items-center  border-gray-400 rounded py-2 px-4 leading-tight focus:outline-none  "
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            type="button"
          >
            <IoEarthSharp
              size={25}
              className="inline-block mr-1 text-gray-600"
            />{" "}
            {selectedLanguage}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3 inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {showLanguageDropdown && (
            <div className="absolute z-10 transition-opacity duration-300 delay-100 opacity-100 transform origin-bottom-left top-16 left-8 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-32">
              <ul
                className="py-5  text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <button
                    className="block px-9  py-3 text-lg hover:bg-gray-100"
                    onClick={() => handleLanguageChange("English")}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="block px-[34px] py-3 text-lg  hover:bg-gray-100"
                    onClick={() => handleLanguageChange("Espanol")}
                  >
                    Spanish
                  </button>
                </li>
              </ul>
            </div>
          )}
          <span className="flex gap-2 max-sm:gap-1  items-center  ">
            <p className="text-gray-800 flex  text-center max-sm:-mr-4  justify-endflex-nowrap max-sm:text-sm ">
              {t("Already have an account?")}
            </p>
            <button className="bg-white border-gray-700 border py-1 px-4 rounded-xl ">
              Login
            </button>
          </span>
        </div>

        {/* sign up section */}
        <div className="flex flex-col gap-3 justify-self-center  pt-32   ">
          <div>
            <div className="flex flex-col items-center justify-center gap-9 mx-auto    ">
              <h2 className="text-3xl text-gray-900 font-bold flex   flex-nowrap items-center justify-center ">
                <FaVideo
                  size={40}
                  className="inline-block mr-2 mt-1 "
                  style={{ transform: "scaleX(-1)" }}
                />
                Typeform
              </h2>

              <h6 className="lg:text-3xl md:text-3xl text-2xl  font-thin  text-gray-700  text-center max-lg:px-12  lg:w-[76%] ">
                {t(
                  "Get better data with conversational forms, surveys, quizzes & more"
                )}
              </h6>
              {showLoader ? (
                <div className="flex justify-center items-center">
                  <div className="loader"></div>
                </div>
              ) : (
                <>
                  {showEmailPassword ? (
                    <div className="flex flex-col items-center max-md:-ml-24">
                      <EmailSignUpValidation />
                    </div>
                  ) : (
                    <div className="space-y-4  ">
                      <button
                        className="p-2 border border-gray-700 gap-4 text-xl font-semibold  lg:w-[350px] max-lg:w-[300px] rounded-xl flex items-center justify-start"
                        onClick={() => {
                          window.open(
                            "https://accounts.google.com/signup",
                            "_blank"
                          );
                        }}
                      >
                        <FcGoogle className="mr-2" size={34} />
                        {t("Signup with Google")}
                      </button>

                      <button
                        className="pl-1 lg:w-[350px] max-lg:w-[300px] border border-gray-700 text-xl font-semibold gap-5 rounded-xl flex items-center justify-start"
                        onClick={() => {
                          window.open("https://signup.live.com/", "_blank");
                        }}
                      >
                        <span className="w-11">
                          <svg
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect fill="#fff" height="12" rx="15%" width="12" />
                            <path d="m75 75v171h171v-171z" fill="#f25022" />
                            <path d="m266 75v171h171v-171z" fill="#7fba00" />
                            <path d="m75 266v171h171v-171z" fill="#00a4ef" />
                            <path d="m266 266v171h171v-171z" fill="#ffb900" />
                          </svg>
                        </span>
                        {t("Signup with Microsoft")}
                      </button>

                      <span className="text-gray-500 text-lg block text-center">
                        OR
                      </span>
                      <button
                        className="bg-gray-900 hover:bg-gray-800 p-3 text-white text-xl font-semibold lg:w-[350px] max-lg:w-[300px] rounded-xl"
                        onClick={handleEmailSignUpClick}
                      >
                        {t("Sign up with Email")}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
