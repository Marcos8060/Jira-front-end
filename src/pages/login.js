import React, { useContext } from "react";
import Lottie from "lottie-react";
import animatedData from "../assets/login.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { userContext } from "@/AuthContext";
import { TextField } from "@mui/material";

const MyLottieAnimation = () => {
  return <Lottie animationData={animatedData} loop={true} autoplay={true} />;
};

const Login = () => {
  const { loginUser, message } = useContext(userContext);

  const validationSchema = yup.object({
    username: yup.string("Enter username").required("Username is required"),
    password: yup.string("Enter password").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, helpers) => {
      console.log("LOGIN VALUES ",values);
      try {
        loginUser(values.username,values.password);
        helpers.resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      {message && toast.error(message)}
      <section className="flex justify-center gap-4 md:w-7/12 w-11/12 h-[70vh] my-20 mx-auto bg-white md:shadow-2xl rounded">
        <div className="md:w-1/2 md:block hidden bg-rblue rounded">
          <MyLottieAnimation />
        </div>
        <div className="md:w-1/2 w-full px-4 my-auto">
          <img
            className="w-40 object-cover mx-auto"
            src="/images/jira.png"
            alt=""
          />
          <h1 className="text-center font-black text-xl uppercase my-4">
            Welcome back to Jira
          </h1>
          <form className="flex flex-col space-y-3" onSubmit={formik.handleSubmit}>
            <TextField
              name="username"
              onChange={formik.handleChange}
              label="username"
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              name="password"
              onChange={formik.handleChange}
              label="password"
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-rblue text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
