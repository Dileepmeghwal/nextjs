import Apicalling from "@/Api/Apicalling";
import Button from "@/components/Button";
import Error from "@/components/Error";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Spinner from "react-spinner-material";

const Register = () => {
  const router = useRouter();
  const initialStates = {
    name: "test",
    email: "test@gmail.com",
    password: "1234",
    avatar: "https://picsum.photos/800",
  };
  const [state, setState] = useState(initialStates);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

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
    if (!state.name) {
      newErrors.name = "Name is required";
    }
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
    if (!state.avatar) {
      newErrors.avatar = "avatar is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotify("");
    if (validate()) {
      setLoading(true);
      try {
        Apicalling.apiCallPost("users", state).then((res) => {
          console.log("response", res);
          setLoading(false);
          if (res.status === 201) {
            clear();
            router.push('/login')
          }
        });
      } catch (error) {
        // alert(error.message)
        setLoading(false);
      }
    }
  };
  return (
    <div className="container">
      <div className="row vh-100  justify-content-center aling-items-center align-content-center">
        {notify && <span>{notify}</span>}
        <div className="col-lg-6 ">
          <h3 className="px-2">Create an account</h3>
          <form onSubmit={handleSubmit}>
            <Input
              name={"name"}
              placeholder={"Full Name"}
              value={state.name}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && <Error error={errors.name} />}
            <Input
              type="email"
              name={"email"}
              placeholder={"email@gmail.com"}
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
            <Input
              name={"avatar"}
              placeholder={"Avatar"}
              value={state.avatar}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.avatar && <Error error={errors.avatar} />}

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
              Sign Up{" "}
              {loading && (
                <Spinner radius={18} color={"#fff"} stroke={2} visible={true} />
              )}
            </Button>
          </form>
          <span>
            Already have an account ? <Link href="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
