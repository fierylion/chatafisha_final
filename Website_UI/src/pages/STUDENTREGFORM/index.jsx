import React from "react";
import { useForm } from "react-hook-form";
import { Text, Img } from "components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFetch from "hooks";
import { Information } from "components";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const schema = yup
  .object({
    //name
    first_name: yup
      .string()
      .required("Please provide your first name! ")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 15 characters"),
      //name
      last_name: yup
      .string()
      .required("Please provide your last name! ")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 15 characters"),

    //email
    email: yup
      .string()
      .required("Please provide your email address")
      .min(5, "email must be at least 5 characters")
      .max(50, "email must be at most 50 characters"),

    //registration
    registration: yup
      .number()
      .positive("Registration number can't be negative")
      .integer("Registration should be an integer!")
      .required("Please provide your registration number"),
    //contact
    university: yup
      .string()
      .required("Please enter your university! ")
      .min(5, "contact must be at least 5 characters")
      .max(50, "contact must be at most 50 characters"),

    //location
    department: yup.string().required("Please enter your department! "),

    //password
    password: yup
      .string()
      .required("Please provide your password!")
      .min(4, "password must be at least 4 characters")
      .max(50, "password must be at most 50 characters"),

    //role
    collage: yup.string().required("Please enter your collage name!"),
  })
  .required();
function StudentRegForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const first_name = watch("first_name");
  const last_name = watch("last_name");
  const email = watch("email");
  const registration = watch("registration");
  const university = watch("university");
  const department = watch("department");
  const collage = watch("collage");
  const password = watch("password");

  const onSubmit = () => {

  }

  return (
    <main
      className=" bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <section className="d-flex flex-column w-[50%] md:w-[75%] sm:w-full">
        <article className="mx-auto mb-3 ">
        </article>
        <article className="registration   p-4 rounded shadow-lg w-75 m-auto">
          <div class="mb-3 pb-1border-b-2 text-center font-base text-gray-700">
            <div className="flex justify-center ">
              <Text
                className="font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-center w-auto"
                as="h4"
                variant="h4"
              >
                CHATAFISHA
              </Text>
              <Img
                src="images/img_mainlogo_black_901.svg"
                className="h-8 md:ml-[13px] ml-[15px] md:mt-0 mt-[5px] w-auto "
                alt="mainlogo"
              />
            </div>
          </div>
          <div class="mb-3 text-center font-semibold text-black">
            Create a student account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
                  placeholder="First Name"
                  {...register("first_name")}
                  value={first_name}
                />
                {errors.first_name ? (
                  <div className="invalid-feedback">{errors.first_name?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
                  placeholder="Last Name"
                  {...register("last_name")}
                  value={last_name}
                />
                {errors.last_name ? (
                  <div className="invalid-feedback">{errors.last_name?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              
              <div className="col-md-12 mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  {...register("email")}
                  value={email}
                />
                {errors.email ? (
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.university ? "is-invalid" : ""}`}
                  placeholder="University Name"
                  {...register("university")}
                  value={university}
                />
                {errors.university ? (
                  <div className="invalid-feedback">{errors.university?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.collage ? "is-invalid" : ""}`}
                  placeholder="Collage"
                  {...register("collage")}
                  value={collage}
                />
                {errors.collage ? (
                  <div className="invalid-feedback">{errors.collage?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.department ? "is-invalid" : ""}`}
                  placeholder="Department"
                  {...register("department")}
                  value={department}
                />
                {errors.department ? (
                  <div className="invalid-feedback">{errors.department?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errors.registration ? "is-invalid" : ""
                  }`}
                  placeholder="Registration Number"
                  {...register("registration")}
                  value={registration}
                />
                {errors.registration ? (
                  <div className="invalid-feedback">
                    {errors.registration?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>

              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                  {...register("password")}
                  value={password}
                />
                {errors.password ? (
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
       
            </div>
            <div className="text-center">
              <button className="btn btn-primary form-control" type="submit">
                register
              </button>
            </div>
            <div class="my-2 py-3 border-b-2 text-center font-base text-gray-700">
              <label class="block text-gray-500 font-normal mb-1">
                <a
                  href="/loginform"
                  class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400 no-underline                  "
                >
                  <span>Have an account alredy? Login here</span>
                </a>
              </label>
            </div>
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="/"
                className="text-blueGray-500 hover:text-blueGray-300 text-sm font-semibold py-1"
              >
                Chatafisha
              </a>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
}

export default StudentRegForm;
