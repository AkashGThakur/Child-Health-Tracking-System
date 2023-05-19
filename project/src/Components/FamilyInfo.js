import './App.css';
import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import FamilyService from '../Services/FamilyService';



import ScreeningNav from './ScreeningNav';

const FamilyInfo = () => {

  const {child_id} = useParams();    
  const [fatherName,  setFatherName] = useState('');
  const [motherName,  setMotherName] = useState('');
  const [parentsMobileNo,  setParentsMobileNo] = useState('');
  const [siblings,  setSiblings] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');

  useEffect(() => {
    FamilyService.getFamilyByID(child_id).then((response) => {
      setFatherName(response.data.fatherName)
      setMotherName(response.data.motherName)
      setSiblings(response.data.siblings)
      setParentsMobileNo(response.data.parentsMobileNo)
      setFatherOccupation(response.data.fatherOccupation)
      setMotherOccupation(response.data.motherOccupation)
    })
},[])


  return (
    <div>
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>

    <div>
        <h4 className='page-screeninghead'>Family Information</h4>
        <div>
          <Row>
          <Col sm={12}>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          > 
            <TextField value ={fatherName} name = "fatherName" InputProps={{ readOnly: true,}}  label="Father's Name" variant="outlined" />
            <TextField value ={motherName} name = "motherName" InputProps={{ readOnly: true,}}  label="Mother's Name" variant="outlined" />
            <TextField value ={parentsMobileNo} name = "parentsMobileNo" InputProps={{ readOnly: true,}}  label="Parent's Mobile Number" variant="outlined" />
            <TextField value ={fatherOccupation} name = "fatherOccupation" InputProps={{ readOnly: true,}}  label="Occupation of Father" variant="outlined" />
            <TextField value ={motherOccupation} name = "motherOccupation" InputProps={{ readOnly: true,}}  label="Occupation of Mother" variant="outlined" />
            <TextField  value ={siblings} name = "siblings" InputProps={{ readOnly: true,}}  label="Siblings" variant="outlined" />
           
          </Box>
          </Paper>
          </Col>
            </Row>

          </div>
          </div>
    
    </div>
  );
}

export default FamilyInfo;