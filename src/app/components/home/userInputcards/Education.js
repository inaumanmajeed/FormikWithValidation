import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";
import BasicImg from "app/assets/images/Home/basicInfo.svg";
import { Field } from "formik";
import CustomInput from "app/components/shared/input/Input";
import { FormContainer } from "../styles";
import SchoolIcon from "app/assets/images/Home/school.svg";

const EducationInfoCard = ({ boxShadow }) => {
  return (
    <UserInputFormLayoutCard
      boxShadow={boxShadow}
      img={SchoolIcon}
      title={"Education Information"}
    >
      <FormContainer>
        <Field
          name="highestEducationalQualification"
          type="text"
          label="Highest Educational Qualification"
          placeholder="ie. MBA"
          component={CustomInput}
        />
        <Field
          name="collegeUniversity"
          type="text"
          label="College/University"
          placeholder="ie. LUMS"
          component={CustomInput}
        />
        <Field
          name="employedIn"
          type="text"
          label="Employed In"
          placeholder="ie. Private"
          component={CustomInput}
        />
        <Field
          name="occupation"
          type="text"
          label="Occupation"
          placeholder="ie. Software Engineer"
          component={CustomInput}
        />
        <Field
          name="countryOfResidence"
          type="text"
          label="Country of Residence"
          placeholder="ie. USA"
          component={CustomInput}
        />
        <Field
          name="annualIncome"
          type="number"
          label="Annual Income"
          placeholder="ie. 100000"
          component={CustomInput}
        />
        <Field
          name="workTravel"
          type="text"
          label="Work Travel"
          placeholder="ie. Often"
          component={CustomInput}
        />
        <Field
          name="livingWithFamily"
          type="text"
          label="Living with Family"
          placeholder="ie. Yes"
          component={CustomInput}
        />
      </FormContainer>
    </UserInputFormLayoutCard>
  );
};

export default EducationInfoCard;
