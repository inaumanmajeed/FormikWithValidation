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
      </FormContainer>
    </UserInputFormLayoutCard>
  );
};

export default BasicInfoCard;
