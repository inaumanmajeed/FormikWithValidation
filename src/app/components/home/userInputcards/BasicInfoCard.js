import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";
import BasicImg from "app/assets/images/Home/basicInfo.svg";
import { Field } from "formik";
import CustomInput from "app/components/shared/input/Input";

const BasicInfoCard = () => {
  return (
    <UserInputFormLayoutCard img={BasicImg} title={"Basic Information"}>
      <Field
        name="firstName"
        type="text"
        label="First Name"
        placeholder="Enter your first name"
        component={CustomInput} // Use CustomInput here
      />
      <Field
        name="lastName"
        type="text"
        label="Last Name"
        placeholder="Enter your last name"
        component={CustomInput} // Use CustomInput here
      />
      <Field
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        component={CustomInput} // Use CustomInput here
      />
    </UserInputFormLayoutCard>
  );
};

export default BasicInfoCard;
