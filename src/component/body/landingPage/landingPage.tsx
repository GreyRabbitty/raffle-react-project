import React from "react";
import Welcome from "./welcome";
import WelcomeBelow from "./welcomeBelow";
import LiveWinners from "./liveWinners";

const LandingPage = () => {
  return (
    <div className="flex flex-col border gap-[32px] ">
      <Welcome />
      <WelcomeBelow />
      <LiveWinners />
    </div>
  );
};

export default LandingPage;
