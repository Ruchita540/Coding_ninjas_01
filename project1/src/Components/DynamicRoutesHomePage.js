import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FreeResources from './FreeResources';
import MockInterview from './MockInterview';
import GuidedProgram from './GuidedProgram';
import PlacementCell from './PlacementCell';
import CodingNinjaStudio from './CodingNinjaStudio';
import DoubtResolution from './DoubtResolution';


const DynamicRoutesHomePage = () => {
  return (
    <div>
        <Routes>
            <Route path='/GUIDEDPROGRAM' element={<GuidedProgram/>}></Route>
            <Route path='/DOUBTRESOLUTION' element={<DoubtResolution/>}></Route>
            <Route path='/CODINGNINJASSTUDIO' element={<CodingNinjaStudio/>}></Route>
            <Route path='/MOCKINTERVIEW' element={<MockInterview/>}></Route>
            <Route path='/PLACEMENTCELL' element={<PlacementCell/>}></Route>
            <Route path='/FREERESOURCES' element={<FreeResources/>}></Route>
        </Routes>
    </div>
  )
}

export default DynamicRoutesHomePage