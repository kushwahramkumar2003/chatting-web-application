import React from "react";
import { useState } from "react";
import config from "../../config/config";
import Signup from "./Signup";

const SendOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [isOtpReceive, setIsOtpReceive] = useState(false);

  const submit = () => {};
  const sendOtp = async (e) => {
    const otpUrl = config.host_url + "/auth/sendOTP";
    // const response = await fetch(otpUrl);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    try {
      setIsOtpSend(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/sendOTP",
        requestOptions
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyEmail = (e) => {};

  return (
    <div>
      <form>
        {isOtpReceive && <Signup />}
        {!isOtpReceive && (
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              value={email}
              placeholder="Enter email here"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=""
            />
            {!isOtpSend && (
              <button onClick={sendOtp} className="text-lg bg-green-400">
                Send OTP
              </button>
            )}
            {isOtpSend && (
              <div>
                <input type="text" />
                <button onClick={verifyEmail} className="bg-green-400">
                  Verify Email
                </button>
              </div>
            )}
          </form>
        )}
      </form>
    </div>
  );
};

export default SendOTP;
