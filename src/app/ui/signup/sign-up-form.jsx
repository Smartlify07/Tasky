"use client";
import { Field, Form, Formik } from "formik";
import Yup from "yup";
import { CiLock, CiUser, CiMail } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import TextInput from "../text-input";

const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          email: "",
        }}
        onSubmit={() => {}}
      >
        <Form className="border-4 shadow-xl w-11/12 md:w-5/12  border-orange-500 rounded-md flex flex-col gap-5 py-6 px-3 lg:px-5">
          <div className="flex flex-col gap-5 relative">
            <TextInput
              Icon={CiUser}
              name="userName"
              type="text"
              label="Username"
              placeholder="User name"
            />

            <TextInput
              Icon={CiMail}
              name="email"
              type="email"
              label="Email"
              placeholder="E.g johndoe@gmail.com"
            />

            <TextInput
              Icon={CiLock}
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />

            <button className="bg-orange-500 rounded-md py-3 px-3 font-medium text-lg text-white">
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
