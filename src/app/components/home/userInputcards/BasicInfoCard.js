import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";
import BasicImg from "app/assets/images/Home/basicInfo.svg";
import { Field } from "formik";
import CustomInput from "app/components/shared/input/Input";
import { FormContainer } from "../styles";

const BasicInfoCard = ({ boxShadow }) => {
  return (
    <UserInputFormLayoutCard boxShadow={boxShadow} img={BasicImg} title={"Basic Information"}>
      <FormContainer>
        <Field
          name="fullName"
          type="text"
          label="Full Name"
          placeholder="ie. John Doe"
          component={CustomInput}
        />
        <Field
          name="age"
          type="number"
          label="Age"
          placeholder="ie. 25"
          component={CustomInput}
        />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="ie. abc@xyz.com"
          component={CustomInput}
        />
        <Field
          name="phoneNumber"
          type="number"
          label="Phone Number"
          placeholder="ie. +923144444444"
          component={CustomInput}
        />
        <Field
          name="gender"
          type="text"
          label="Gender"
          placeholder="ie. Male"
          component={CustomInput}
        />
        <Field
          name="maritalStatus"
          type="text"
          label="Marital Status"
          placeholder="ie. Single"
          component={CustomInput}
        />
        <Field
          name="location"
          type="text"
          label="Location"
          placeholder="ie. USA"
          component={CustomInput}
        />
        <Field
          name="nationality"
          type="text"
          label="Nationality"
          placeholder="ie. USA"
          component={CustomInput}
        />
      </FormContainer>
    </UserInputFormLayoutCard>
  );
};

export default BasicInfoCard;
