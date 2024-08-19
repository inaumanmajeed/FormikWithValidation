import React, { useState } from "react";
import { Formik, Form } from "formik";
import LayoutMainWeb from "app/layouts/web";
import BasicInfoCard from "app/components/home/userInputcards/BasicInfoCard";
import { MainContainerWrapper } from "../styles";
import ValidationSchema from "app/utils/ValidationSchema";
import EducationInfoCard from "app/components/home/userInputcards/Education";

const initialValues = {
  // Basic Info
  fullName: "",
  age: "",
  email: "",
  phoneNumber: "",
  gender: "",
  maritalStatus: "",
  location: "",
  nationality: "",
  // Education Info
  highestEducationalQualification: "",
  collegeUniversity: "",
  employedIn: "",
  occupation: "",
  countryOfResidence: "",
  annualIncome: "",
  workTravel: "",
  livingWithFamily: "",
};

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (values) => {
    const {
      // Basic Info
      fullName,
      age,
      email,
      phoneNumber,
      gender,
      maritalStatus,
      location,
      nationality,

      // Education Info
      highestEducationalQualification,
      collegeUniversity,
      employedIn,
      occupation,
      countryOfResidence,
      annualIncome,
      workTravel,
      livingWithFamily,
    } = values;

    const basicInfo = {
      fullName,
      age,
      email,
      phoneNumber,
      gender,
      maritalStatus,
      location,
      nationality,
    };
    const educationInfo = {
      highestEducationalQualification,
      collegeUniversity,
      employedIn,
      occupation,
      countryOfResidence,
      annualIncome,
      workTravel,
      livingWithFamily,
    };

    const body = {
      basicInfo,
      educationInfo,
    };
    console.log("🚀 ~ onSubmit ~ body:", body);
    setIsSubmitted(true);
  };

  return (
    <LayoutMainWeb>
      <MainContainerWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchema}
        >
          {() => (
            <Form className="form__main">
              <BasicInfoCard boxShadow={"0px 0px 40px 0px #FFEEC266"} />
              <EducationInfoCard boxShadow={"0px 0px 50px 0px #FFB0C44D"} />
              <button className="submit__btn" type="submit">
                {isSubmitted ? "Submitted" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </MainContainerWrapper>
    </LayoutMainWeb>
  );
};

export default Home;
