import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";

import BasicImg from 'app/assets/images/Home/basicInfo.svg'

const BasicInfoCard = () => {
  return (
    <UserInputFormLayoutCard img={BasicImg} title={"Basic Information"}>
      BasicInfoCard
    </UserInputFormLayoutCard>
  );
};

export default BasicInfoCard;
