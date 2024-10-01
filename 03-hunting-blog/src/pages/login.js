"use client";
import Apicalling from "@/Api/Apicalling";
import Button from "@/components/Button";
import Error from "@/components/Error";
import Input from "@/components/Input";
import { useAuth } from "@/context/authContext";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "react-spinner-material";

const Login = () => {
  const router = useRouter();
  const initialStates = {
    email: "test@gmail.com",
    password: "1234",
  };
  const [state, setState] = useState(initialStates);
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const clear = () => {
    setState(initialStates);
  };

  const validate = () => {
    const newErrors = {};
    setShowMsg("");

    if (!state.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!state.password) {
      newErrors.password = "Password is required";
    } else if (state.password.length < 4) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowMsg("");

    if (validate()) {
      setLoading(true);
      try {
        Apicalling.apiCallPost("auth/login", state).then((response) => {
          setLoading(false);
          console.log("resp", response);
          if (response.status !== 201) {
            setShowMsg("Unable to login with provided credentials");
            toast.error("Unable to login with provided credentials");
          } else {
            // setShowMsg("");
            login(response?.data?.access_token);
            toast.success("Logged in Successfull");
            setTimeout(() => {
              router.push("/");
            }, 2000);
          }
        });
      } catch (error) {
        console.log("ERROR", error);
        setShowMsg("something went wrong");
        
      }
    }
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center aling-items-center align-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name={"email"}
              placeholder={"Email address"}
              value={state.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <Error error={errors.email} />}
            <Input
              type="password"
              name={"password"}
              placeholder={"Password"}
              value={state.password}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.password && <Error error={errors.password} />}

            <Button
              type="submit"
              style={{
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 10,
              }}
              disabled={loading}
            >
              Login{" "}
              {loading && (
                <Spinner radius={24} color={"#fff"} stroke={2} visible={true} />
              )}
            </Button>
            <span>
              I haven't account ? <Link href="/register">Sign Up</Link>
            </span>
          </form>
          <span>{showMsg.length > 0  && showMsg}</span>
        </div>

        {/* {showMsg.length > 0 && <p style={{ color: "yellow" }}>{showMsg}</p>} */}
      </div>
    </div>
  );
};

export default Login;
