import React from "react";
import { Formik, Form } from "formik";
import LayoutMainWeb from "app/layouts/web";
import BasicInfoCard from "app/components/home/userInputcards/BasicInfoCard";
import { MainContainerWrapper } from "../styles";
import ValidationSchema from "app/utils/ValidationSchema";

const initialValues = {
  fullName: "",
  age: "",
  email: "",
  // phoneNumber: "",
  // address: "",
  // city: "",
  // state: "",
  // zip: "",
  // country: "",
};

const Home = () => {
  const onSubmit = (values) => {
    const { fullName, age, email } = values;

    const body = {
      fullName,
      age,
      email,
    };

    console.log("Form submitted with values:", body);
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
              <BasicInfoCard />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </MainContainerWrapper>
    </LayoutMainWeb>
  );
};

export default Home;
