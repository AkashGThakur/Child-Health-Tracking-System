import './App.css';
import React, {useState, useEffect} from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import SchoolService from '../Services/SchoolService';
import { useNavigate, useParams } from 'react-router-dom';


//import bootstrap from 'bootstrap';

export default function AddSchool(){

   const [contactNo, setContactNo] = useState('');
   const [schoolName, setSchoolName] = useState('');  
   const [schoolEmail, setSchoolEmail] = useState('');
   const [block, setBlock] = useState('');
   const {registrationNo} = useParams();            
     
   const navigate = useNavigate();

   const saveSchool = (e) => {   
        e.preventDefault();
        const School = {contactNo, schoolName, schoolEmail, block};

        if(registrationNo){
            SchoolService.UpdateSchool(registrationNo, School).then((response) => {
            console.log(response.data);
            navigate('/SchoolList');
             }).catch(error => {
            console.log(error);
          }) 
        }
        else{
             SchoolService.postSchool(School).then((response) => {
             console.log(response.data);
             navigate('/SchoolList');
           }).catch(error => {
            console.log(error);
          })   
        }
          
  }  
  
  useEffect(() => {
        SchoolService.getSchoolByID(registrationNo).then((response) => {
          setContactNo(response.data.contactNo)
          setSchoolName(response.data.schoolName)
          setSchoolEmail(response.data.schoolEmail)
          setBlock(response.data.block)
        })
  },[])

  const title = () =>{

    if(registrationNo){
      return <h4 className='page-head'>Update School</h4>
    }
    else{
      return <h4 className='page-head'>Add New School</h4>
    }
  }

  return (                  
    <div>
    <TemporaryDrawer/>
      <div>
        {
          title()
        }
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

          <TextField label="Registration No" value ={registrationNo} name = "registrationNo" InputProps={{ readOnly: true,}} variant="outlined" />
         <TextField label="Contact No" value ={contactNo} name = "contactNo" onChange={(e) => setContactNo(e.target.value)} variant="outlined" />
         <TextField label="School Name" value ={schoolName} name = "schoolName" onChange={(e) => setSchoolName(e.target.value)} variant="outlined" />
         <TextField label="School Email" value ={schoolEmail} name = "schoolEmail" onChange={(e) => setSchoolEmail(e.target.value)} variant="outlined" />
         {/* <TextField label="Block" value ={block} name = "block" onChange={(e) => setBlock(e.target.value)} variant="outlined" /> */}

         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Block</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={block} name = "block" label="Block" onChange={(e) => setBlock(e.target.value)}>
          <MenuItem value={'Ambegaon'}>Ambegaon</MenuItem>
              <MenuItem value={'Baramati'}>Baramati</MenuItem>
              <MenuItem value={'Bhor'}>Bhor</MenuItem>
              <MenuItem value={'Daund'}>Daund</MenuItem>
              <MenuItem value={'Haveli'}>Haveli</MenuItem>
              <MenuItem value={'Indapur'}>Indapur</MenuItem>
              <MenuItem value={'Junnar'}>Junnar</MenuItem>
              <MenuItem value={'Khed'}>Khed</MenuItem>
              <MenuItem value={'Maval'}>Maval</MenuItem>
              <MenuItem value={'Mulshi'}>Mulshi</MenuItem>
              <MenuItem value={'Pune'}>Pune</MenuItem>
              <MenuItem value={'Purandar'}>Purandar</MenuItem>
              <MenuItem value={'Shirur'}>Shirur</MenuItem>
              <MenuItem value={'Velhe'}>Velhe</MenuItem>
        
        </Select>
      </FormControl>

          </Box>                         
         </Paper>
         <button type="submit" onClick ={(e) => saveSchool(e)} className="btn btn-primary save-btn">
                Submit
          </button>
        </div>
      </div>
    </div>
  );
}                
