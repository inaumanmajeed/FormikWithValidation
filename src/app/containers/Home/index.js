import React from "react";
import { Formik, Form } from "formik";
import LayoutMainWeb from "app/layouts/web";
import BasicInfoCard from "app/components/home/userInputcards/BasicInfoCard";
import { MainContainerWrapper } from "../styles";
import ValidationSchema from "app/utils/ValidationSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

const Home = () => {
  const onSubmit = async (values) => {
    const { firstName, lastName, email } = values;

    const body = {
      firstName,
      lastName,
      email,
    };

    console.log(body);
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
