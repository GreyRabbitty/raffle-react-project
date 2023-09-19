import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/header";
import Footer from "./footer/footer";
import CollectionPage from "./body/firstPage/collectionPage";
import DetailPage from "./body/secondPage/detailPage";
import ProfilePage from "./body/profilePage/profilePage";
import AnalyticsPage from "./body/analyticsPage/AnalyticsPage";
import LandingPage from "./body/landingPage/landingPage";
import BodyHeaderBtnGroup from "./common/bodyHeaderBtnGroup";

const Main = () => {
  return (
      <div className="min-h-screen">
        <BrowserRouter>
          <div className="mt-[32px] md:mx-[52px]">
            <Header />
          </div>
          <BodyHeaderBtnGroup />
          <Routes>
            <Route path='/' element={<CollectionPage />} />
            <Route path='/detail' element={<DetailPage finishFlag={false} />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/analytics' element={<AnalyticsPage />} />
            <Route path='/land' element={<LandingPage />} />
            <Route path='/finishRaffle' element={<DetailPage finishFlag={true} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
};

export default Main;
