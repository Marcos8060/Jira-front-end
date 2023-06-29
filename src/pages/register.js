import React, { useState } from "react";
import Lottie from "lottie-react";
import animatedData from "../assets/login.json";
import * as yup from "yup";
import { authApi } from "@/redux/service/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";

const MyLottieAnimation = () => {
  return <Lottie animationData={animatedData} loop={true} autoplay={true} />;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    name: yup.string("Enter name").required("Name is required"),
    email: yup
      .string("Enter email address")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string("Enter password").required("Password is required"),
  });

  const handleSubmit = async (formValue, helpers) => {
    try {
      setLoading(true);
      const res = await authApi.registerUser(formValue);
      if (res.success) {
        toast.success(res.message);
        setLoading(false);
        helpers.resetForm();
        router.push('/login')
      }
    } catch (error) {
      toast.error(error.response.data.message[0]);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex justify-center gap-4 md:w-7/12 w-11/12 h-[74vh] my-20 mx-auto bg-white md:shadow-2xl rounded">
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
            Welcome to Jira
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
                placeholder="Name"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red text-xs"
              />
              <Field
                className="border px-2 border-rblue rounded py-2 focus:outline-none my-2"
                type="email"
                placeholder="Email"
                name="email"
              />
              <ErrorMessage
                name="email"
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
                {loading ? "Processing..." : "Register"}
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Register;
