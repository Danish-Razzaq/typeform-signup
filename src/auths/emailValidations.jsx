import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./index.css";

const EmailSignUpValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [expandOptions, setExpandOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    usefulTips: "Yes",
    tailorTypeform: "No",
    enrichData: "Yes",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!isValidPassword(newPassword)) {
      setPasswordError(
        "Use 8 or more characters with a mix of letters, numbers and symbols"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!isValidEmail(newEmail)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password validation: at least 8 characters with a mix of letters, numbers, and symbols
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleCreateAccountClick = () => {
    // Logic to create account
    if (!isValidEmail(email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    if (!isValidPassword(password)) {
      setPasswordError(
        "Use 8 or more characters with a mix of letters, numbers and symbols"
      );
      return;
    }
    // Proceed with account creation
    // For demonstration purposes, setAccountCreated to true
    setAccountCreated(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTermsAgreement = () => {
    setAgreeToTerms(!agreeToTerms);
    setSelectedOptions({
      usefulTips: "Yes",
      tailorTypeform: "Yes",
      enrichData: "Yes",
    })
  };

  const toggleOptions = () => {
    setExpandOptions(!expandOptions);
  };

  const handleOptionChange = (option, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className=" flex justify-center items-center flex-col  mb-10 px-2">
        {!accountCreated && (
          <>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="border border-gray-400 p-2 rounded-md mt-3 lg:w-[350px] max-lg:w-[300px]"
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
            <div className="relative mt-3 lg:w-[350px] max-lg:w-[300px]">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="border border-gray-400 p-2 rounded-md lg:w-[350px] max-lg:w-[300px] pr-10" // Adjusting paddingRight for icon
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2 text-gray-400  focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}{" "}
                {/* Eye icons */}
              </button>
            </div>
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
            <div className="flex justify-center items-start  mt-3">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={handleTermsAgreement}
                className="mr-2 mt-1 custom-checkbox"
              />
              <div className="max-sm:w-[250px] max-md:text-sm md:w-[270px] xl:w-[310px max-md:w-[260px] text-gray-600">
                I agree to Typeform’s{" "}
                <span className="underline cursor-pointer">
                  {" "}
                  Terms of Service
                </span>
                ,{" "}
                <span className="underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer">
                  Data Processing Agreement
                </span>{" "}
                .
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              {/* <span> */}

              <button
                onClick={toggleOptions}
                className="to-gray-700 focus:outline-none mb-2 flex text-lg justify-between px-2 lg:w-[350px] max-lg:w-[300px] max-md:w-[310px] "
              >
                See options{" "}
                {expandOptions ? (
                  <IoIosArrowUp className="inline-block" />
                ) : (
                  <IoIosArrowDown className="inline-block" />
                )}
              </button>

              {expandOptions && (
                <div className="flex flex-col pl-4 space-y-1 justify-center max-sm:w-[310px] max-sm:text-sm w-[310px] xl:w-[310px] ">
                  <div className="mb-4 space-y-2 ">
                    <h3 className="text-lg text-gray-800 ">
                      Get useful tips, inspiration, and offers via
                      e-communication.
                    </h3>
                    <div className="flex gap-2">
                      <span className="flex items-center">
                        <input
                          type="radio"
                          id="usefulTipsYes"
                          name="usefulTips"
                          value="Yes"
                          onChange={() =>
                            handleOptionChange("usefulTips", "Yes")
                          }
                          checked={selectedOptions.usefulTips === "Yes"}
                        />
                        <label
                          htmlFor="usefulTipsYes"
                          className="ml-2 cursor-pointer"
                        >
                          Yes
                        </label>
                      </span>
                      <span className="flex items-center">
                        <input
                          type="radio"
                          id="usefulTipsNo"
                          name="usefulTips"
                          value="No"
                          onChange={() =>
                            handleOptionChange("usefulTips", "No")
                          }
                          checked={selectedOptions.usefulTips === "No"}
                        />
                        <label
                          htmlFor="usefulTipsNo"
                          className="ml-2 cursor-pointer"
                        >
                          No
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 space-y-2">
                    <h3 className="text-lg text-gray-800">
                      Tailor Typeform to my needs based on my activity.See
                      Privacy Policy
                    </h3>
                    <div className="flex gap-2">
                      <span className="flex items-center">
                        <input
                          type="radio"
                          id="tailorTypeformYes"
                          name="tailorTypeform"
                          value="Yes"
                          onChange={() =>
                            handleOptionChange("tailorTypeform", "Yes")
                          }
                          checked={selectedOptions.tailorTypeform === "Yes"}
                        />
                        <label
                          htmlFor="tailorTypeformYes"
                          className="ml-2 cursor-pointer"
                          style={{
                            color:
                              selectedOptions.tailorTypeform === "Yes"
                                ? "black"
                                : "initial",
                          }}
                        >
                          Yes
                        </label>
                      </span>

                      <span className="flex items-center">
                        <input
                          type="radio"
                          id="tailorTypeformNo"
                          name="tailorTypeform"
                          value="No"
                          onChange={() =>
                            handleOptionChange("tailorTypeform", "No")
                          }
                          checked={selectedOptions.tailorTypeform === "No"}
                        />
                        <label
                          htmlFor="tailorTypeformNo"
                          className="ml-2 cursor-pointer"
                        >
                          No
                        </label>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-800">
                      Enrich my data with select third parties for more relevant
                      content.See Privacy Policy
                    </h3>
                    <div className="flex gap-2">
                      <span className="flex items-center">
                        <input
                          type="radio"
                          id="enrichDataYes"
                          name="enrichData"
                          value="Yes"
                          onChange={() =>
                            handleOptionChange("enrichData", "Yes")
                          }
                          checked={selectedOptions.enrichData === "Yes"}
                        />
                        <label
                          htmlFor="enrichDataYes"
                          className="ml-2 cursor-pointer"
                        >
                          Yes
                        </label>
                      </span>
                      <span className="flex items-center">
                        <input
                          type="radio"
                          id="enrichDataNo"
                          name="enrichData"
                          value="No"
                          onChange={() =>
                            handleOptionChange("enrichData", "No")
                          }
                          checked={selectedOptions.enrichData === "No"}
                        />
                        <label
                          htmlFor="enrichDataNo"
                          className="ml-2 cursor-pointer"
                        >
                          No
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    You can update your preferences in your Profile at any time
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleCreateAccountClick}
              className="bg-gray-900 hover:bg-gray-800 text-white text-xl font-semibold w-[350px]  max-lg:w-[300px] py-3 rounded-xl mt-3"
            >
              Create my account
            </button>
          </>
        )}
        {accountCreated && (
          <div className=" flex justify-center items-center flex-col w-full text-start   ">
            <div className="flex items-center ml-2 justify-center gap-8">
              <p className="text-xl  font-semibold  text-gray-600">
                We sent an email to{" "}
                <span className="font-bold block my-2 text-gray-950">
                  {email}.
                </span>{" "}
                <span className="block">
                  {" "}
                  Check your inbox to activate your account.
                </span>
              </p>
            </div>
            <button
              className="bg-gray-900 mt-8  hover:bg-gray-800  w-full  flex justify-center items-center text-white text-xl font-semibold py-3 rounded-xl"
              onClick={() => {
                window.location.href =
                  "mailto:recipient@example.com?subject=Subject&body=Body";
              }}
            >
              Open email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSignUpValidation;
