import React, { useState } from "react";
import Lottie from "lottie-react";
import animatedData from "../assets/login.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { authApi } from "@/redux/service/authService";
import { useRouter } from "next/router";


const MyLottieAnimation = () => {
  return <Lottie animationData={animatedData} loop={true} autoplay={true} />;
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup.string("Enter username"),
    password: yup.string("Enter password").required("Password is required"),
  });

  const handleSubmit = async (formValue, helpers) => {
    console.log("FORM VALUE ", formValue);
    try {
      setLoading(true);
      await authApi.loginUser(formValue)
      toast.success("Login Successful");
      helpers.resetForm();
      router.push('/')
    } catch (error) {
      toast.error(error.response.data.detail);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="grid">
              <Field
                className="w-full border px-2 border-rblue rounded py-2 focus:outline-none my-2"
                type="text"
                placeholder="Username"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red text-xs"
              />
              <Field
                className="border px-2 border-rblue rounded py-2 focus:outline-none my-2"
                type="password"
                placeholder="Password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red text-xs"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-rblue text-white px-4 py-2 rounded"
              >
                {loading ? "Processing..." : "Login"}
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Login;
