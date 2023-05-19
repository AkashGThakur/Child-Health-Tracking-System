import './App.css';
import './table.css';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const ScreeningNav = ({child_id}) => {

    const navLog = useNavigate();

  return (
    <div>
      <div className='hlt-head'>
      <button type="submit" onClick ={() => {navLog("/ScreeningList");}} className="btn btn-primary back-button">
            <ArrowBackIosNewIcon/>
      </button>
      <h3 className='healthcard-head'>Child Screening</h3>
      </div>
        <div>
        <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
            <button type="submit" onClick ={() => {navLog(`/BasicInformation/${child_id}`);}} className="btn btn-primary screening-btn">Basic Information</button>
            <button type="submit" onClick ={() => {navLog(`/FamilyInfo/${child_id}`);}} className="btn btn-primary screening-btn">Family Information</button>
            <button type="submit" onClick ={() => {navLog(`/BMIS/${child_id}`);}} className="btn btn-primary screening-btn">BMI & Symptoms</button>
            <button type="submit" onClick ={() => {navLog(`/Vitals/${child_id}`);}} className="btn btn-primary screening-btn">Vitals</button>
            <button type="submit" onClick ={() => {navLog(`/BasicScreening/${child_id}`);}} className="btn btn-primary screening-btn">Basic Screening</button>
            <button type="submit" onClick ={() => {navLog(`/Auditory/${child_id}`);}} className="btn btn-primary screening-btn">Auditory</button>
            <button type="submit" onClick ={() => {navLog(`/Dental/${child_id}`);}} className="btn btn-primary screening-btn">Dental Checkup</button>
            <button type="submit" onClick ={() => {navLog(`/Vision/${child_id}`);}} className="btn btn-primary screening-btn">Vision</button>
            <button type="submit" onClick ={() => {navLog(`/Psychological/${child_id}`);}} className="btn btn-primary screening-btn">Psychological</button>
         </Box>
         </Paper>
        </div>
    </div>
  );
}

export default ScreeningNav;
