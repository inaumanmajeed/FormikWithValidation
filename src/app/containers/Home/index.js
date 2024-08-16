import BasicInfoCard from "app/components/home/userInputcards/BasicInfoCard";
import LayoutMainWeb from "app/layouts/web";
import React from "react";
import { MainContainerWrapper } from "../styles";

const Home = () => {
  return (
    <LayoutMainWeb>
      <MainContainerWrapper>
        <BasicInfoCard />
      </MainContainerWrapper>
    </LayoutMainWeb>
  );
};

export default Home;
