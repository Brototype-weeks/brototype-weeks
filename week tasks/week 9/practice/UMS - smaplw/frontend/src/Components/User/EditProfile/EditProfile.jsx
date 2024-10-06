import { useFormik } from 'formik';
import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userEditProfile } from "../../../Services/UserApi";
import * as Yup  from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
  .required(("Name is required"))
  .min(4, "Username must be at least 4 characters")
  .max(15, "Username cannot be more than 15 characters"),
  email: Yup.string()
  .email("Invalid email format")
  .required("Email is required"),
phone: Yup.string()
  .required("Phonr number is required")
  .matches(/^\d{10,11}$/, "Enter a valid phone number"),
  
profileImage:Yup.mixed().required('file is requied').test(
    'fileType',
  'Only image files are allowed (jpeg, png, gif)',
  (value) => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)

),
password: Yup.string()
  .matches(
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9].*[0-9].*[0-9].*[0-9])/,
    "Password must cantain at least one special character and atleast four numbers"
  )
  .min(4, "Password must be at least 4 characters"),

 })

 

const EditProfile = () => {
  const {id} = useParams();
  const user = useSelector((state)=> state.user.userDetails)
  
  const [userExists , setuserExist] = useState()
  const navigate = useNavigate()
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      username: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      profileImage: null,
      id
     
    },
    validationSchema:validationSchema,
    
    onSubmit: async (values) =>{
      // e.preventDefault();
      try {
        const formData =new FormData();
        formData.append("username",values.username);
        formData.append("email",values.email);
        formData.append("phone", values.phone); 
        formData.append("profileImage",values.profileImage);
        formData.append('id',values._id)

          await userEditProfile(formData);
          console.log("User Update successfully");
          navigate('/')
      } catch (error) {
        if(error.response && error.response.status === 409){
          setuserExist('user already exist')
        }
        console.log('error register user: ',error.message);
      }
    }
  })

  // const handleImageChange = (e) =>{
  //   const file = e.currentTarget.file[0];
  //   if(file){
  //     const previewUrl = URL.createObjectURL(file);
  //     setImagePreview(previewUrl)
  //     formik.setFieldValue('profileImage',file)
  //   }
  // }
  return (
    <div>
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
    <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className=" flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
             UPDATE PROFILE
            </h1>
            <p className="text-[12px] text-gray-500">
              Hey, update your account
            </p>
          </div>
            {userExists && (
              <div className='mt-1 text-base text-center text-red-600'>
                {userExists}
              </div>
            )

            }

         <form onSubmit={formik.handleSubmit}>

          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs flex flex-col gap-4">
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                name='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="tel"
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your phone"
              />

                   <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="file"
                    name="profileImage"
                    id="profileImage"
                    onChange={(e)=> formik.setFieldValue('profileImage',e.currentTarget.files[0])}
                    // onChange={handleImageChange}
                    onBlur={formik.handleBlur}
                    placeholder="aplod your photo"
                  />
              {/* <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                placeholder="Password"
              /> */}
              
            
                

              <button type='submit' className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Update</span>
              </button>
              
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default EditProfile