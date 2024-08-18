import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";
import BasicImg from "app/assets/images/Home/basicInfo.svg";
import { Field } from "formik";
import CustomInput from "app/components/shared/input/Input";
import { FormContainer } from "../styles";

const BasicInfoCard = () => {
  return (
    <UserInputFormLayoutCard img={BasicImg} title={"Basic Information"}>
      <FormContainer>
        <Field
          name="firstName"
          type="text"
          label="First Name"
          placeholder="Enter your first name"
          component={CustomInput}
        />
        <Field
          name="lastName"
          type="text"
          label="Last Name"
          placeholder="Enter your last name"
          component={CustomInput}
        />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          component={CustomInput}
        />
      </FormContainer>
    </UserInputFormLayoutCard>
  );
};

export default BasicInfoCard;
