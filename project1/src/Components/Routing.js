import React from "react";
import Logo from "./Logo";
import Courses from "./Courses";
import Scholarship from "./Scholarship";
import Community from "./Community";
import Practise from "./Practise";
import Home from "./Home";
import EnrollNow from "./EnrollNow";
import Login from "./Login";
import CarrerCamp from "./CarrerCamp";
import FreeResources from "./FreeResources";
import MockInterview from "./MockInterview";
import GuidedProgram from "./GuidedProgram";
import PlacementCell from "./PlacementCell";
import CodingNinjaStudio from "./CodingNinjaStudio";
import DoubtResolution from "./DoubtResolution";

import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/GUIDEDPROGRAM" element={<GuidedProgram />}></Route>
        <Route path="/DOUBTRESOLUTION" element={<DoubtResolution />}></Route>
        <Route
          path="/CODINGNINJASSTUDIO"
          element={<CodingNinjaStudio />}
        ></Route>
        <Route path="/MOCKINTERVIEW" element={<MockInterview />}></Route>
        <Route path="/PLACEMENTCELL" element={<PlacementCell />}></Route>
        <Route path="/FREERESOURCES" element={<FreeResources />}></Route>
      </Route>
      <Route path="/logo" element={<Logo />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/scholarship" element={<Scholarship />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/practise" element={<Practise />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/enrollNow" element={<EnrollNow />}></Route>
      <Route path="/carrercamp" element={<CarrerCamp />}></Route>
    </Routes>
  );
};

export default Routing;