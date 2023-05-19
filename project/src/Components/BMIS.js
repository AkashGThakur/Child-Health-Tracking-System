import './App.css';
import './table.css';
import './New.css';
import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import ChildService from '../Services/ChildService';
import BMISService from '../Services/BMISService';
import ScreeningNav from './ScreeningNav';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

const BMIS = () => {

  const {child_id} = useParams();    
  const [height,  setHeight] = useState('');
  const [weight,  setWeight] = useState('');
  const [bmi,     setBmi] = useState('');
  const [height_for_age,  setHeightForAge] = useState('');
  const [weight_for_age,  setWeightForAge] = useState('');
  const [arm_size,    setArmSize] = useState('');
  const [age,    setAge] = useState('');
  const [birthdate, setBirthdate] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    ChildService.getChildByID(child_id).then((response) => {
      setBirthdate(response.data.birthdate)
      setAge(response.data.age)
    })
    BMISService.getChildByID(child_id).then((response) => {
      setBmi(response.data.bmi)
      setArmSize(response.data.arm_size)
      setWeight(response.data.weight)
      setWeightForAge(response.data.weight_for_age)
      setHeight(response.data.height)
      setHeightForAge(response.data.height_for_age)
    })  
},[])

const saveChildInfo = (e) => {
  e.preventDefault();

  const ChildInfo = {child_id, age, birthdate, bmi, arm_size, weight, height, height_for_age, weight_for_age };

  BMISService.UpdateChild(child_id, ChildInfo).then((response) => {
    console.log(response.data);
    navigate(`/BMIS/${child_id}`);
     }).catch(error => {
    console.log(error);
  })   
}

const handleWeight = (event) => {
  setWeight(event.target.value);
  setWeightForAge((event.target.value)*4);
};

const handleHeight = (event) => {
  setHeight(event.target.value);
  setHeightForAge(((event.target.value)*6)+77);
};
const handleBmi = (height, weight) => {
  setBmi(weight/((height/100)*(height/100)));
};


  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>
    <div>
        <h4 className='page-screeninghead'>Growth Monitoring</h4>
        <div>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
            

            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Date of Birth" selected={birthdate} value={birthdate} 
            name = "birthdate" readOnly
            dateFormat = 'yyyy-MM-dd' 
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        <TextField  value ={age} name = "age" InputProps={{ readOnly: true,}}  label="Age" variant="outlined" />
        <TextField  value ={arm_size} name = "arm_size" onChange={(e) => setArmSize(e.target.value)}  label="Arm size" variant="outlined" />
        <TextField value ={weight} name = "weight" onChange={handleWeight}  label="Weight(kgs)" variant="outlined" />
         <TextField value ={height} name = "height" onChange={(e) => {handleHeight(e);}} label="Height(cms)" variant="outlined" />
         <TextField value ={height_for_age} name = "height_for_age" InputProps={{ readOnly: true,}}  label="Height for age" variant="outlined" />
        <TextField value ={weight_for_age} name = "weight_for_age" InputProps={{ readOnly: true,}} label="Weight for age" variant="outlined" />
          
          <IconButton type="button" sx={{ p: '10px', m: 0.5 }} onClick ={( ) => handleBmi(height, weight)}>
          Calculate BMI
          <ArrowRightIcon ></ArrowRightIcon>
          </IconButton>
          <TextField  value ={bmi} name = "bmi" InputProps={{ readOnly: true,}} label="BMI" variant="outlined" />
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
          </Box>
          </Paper>

            <button type="submit" onClick ={(e) => saveChildInfo(e)} className="btn btn-primary save-button">Save</button>
          </div>
          </div>
    
    </div>
  );
}

export default BMIS;