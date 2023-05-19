import './App.css';
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate, useParams } from 'react-router-dom';
import ChildService from '../Services/ChildService';
import SchoolService from '../Services/SchoolService';

const BasicInformation = () => {

  const {child_id} = useParams();     
  const [schoolName,  setSchoolName] = useState('');
  const [firstName,  setFirstName] = useState('');
  const [LastName,  setLastName] = useState('');
  const [age, setAge] = useState('');
  const [birthdate,  setBirthdate] = useState(null);
  const [gender,  setGender] = useState('');
  const [adhar_no,  setAdhar_No] = useState('');
  const [insurance_no,  setInsurance_No] = useState('');
  const [registrationNo,  setRegistrationNo] = useState('');


  const [DOB, setDOB] = React.useState(null);

  useEffect(() => {
    ChildService.getChildByID(child_id).then((response) => {
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setBirthdate(response.data.birthdate)
      setGender(response.data.gender)
      setAdhar_No(response.data.adhar_no)
      setAge(response.data.age)
      setInsurance_No(response.data.insurance_no)
      setRegistrationNo(response.data.school.registrationNo)
    })
    SchoolService.getSchoolByID(registrationNo).then((response) => {
      setSchoolName(response.data.schoolName)
    })
},[])

  return (
    <div>
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>
    <div>
        <h4 className='page-screeninghead'>Child Basic Information</h4>
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
            <h4 className='page-subhead'>School Information</h4>
            
         <TextField value ={child_id} name = "child_id" InputProps={{ readOnly: true,}} label="Child ID" variant="outlined" />
         <TextField value ={registrationNo} name = "registrationNo" InputProps={{ readOnly: true,}} label="School Registration No" variant="outlined" />
         <TextField value ={schoolName} name = "schoolName"  InputProps={{ readOnly: true,}} label="Child School" variant="outlined" />
    
         </Box>
         </Paper>

         <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
            <h4 className='page-subhead'>Child Information</h4>
            
         <TextField value ={firstName} name = "firstName" InputProps={{ readOnly: true,}} label="First Name" variant="outlined" />
         <TextField value ={LastName} name = "lastName"  InputProps={{ readOnly: true,}} label="Last Name" variant="outlined" />
         <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
            label="Date of Birth" selected={birthdate} value={birthdate} 
            name = "birthdate" readOnly
            dateFormat = 'yyyy-MM-dd' 
            maxDate={new Date()}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField value ={age} name = "age"  label="Age" InputProps={{ readOnly: true,}} variant="outlined" />
         <TextField value ={gender} name = "gender" InputProps={{ readOnly: true,}} label="Gender" variant="outlined" />
         <TextField value ={adhar_no} name = "adhar_no" InputProps={{ readOnly: true,}} label="Aadhar Number" variant="outlined" />
         <TextField value ={insurance_no} name = "insurance_no" InputProps={{ readOnly: true,}} label="Insurance Number" variant="outlined" />        
         </Box>
         </Paper>
         <br></br>
         <br></br>
        </div>
        </div>
    </div>
  );
}

export default BasicInformation;