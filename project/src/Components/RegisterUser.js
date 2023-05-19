import './App.css';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import moment from 'moment';
import UserService from '../Services/UserService';
//import bootstrap from 'bootstrap';



export default function RegisterUser(){

  const {user_Id} = useParams();         
  const [first_Name, setFirst_Name] = useState('');
  const [middle_Name, setMiddle_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [mobile_No, setMobile_No] = useState('');
  const [email, setEmail] = useState('');
  const [d_o_b, setD_o_b] = useState(null);
  const [joining_Date, setJoining_Date] = useState(null);
  const [group_Name, setGroup_Name] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [marital_Status, setMarital_Status] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleGroup_Name = (event) => {
    setGroup_Name(event.target.value);
  };
  
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleMarital_Status = (event) => {
    setMarital_Status(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleDOB = (event) => {
   // let myDate = moment(event).format('L');
   let myDate = moment(event).format('YYYY-MM-DD');
    setD_o_b(myDate);
  };

  const handleJoining_Date = (event) => {
    // let myDate = moment(event).format('L');
    let myDate = moment(event).format('YYYY-MM-DD');
     setJoining_Date(myDate);
   };

  const saveUser = (e) => {
    e.preventDefault();

    const User = {first_Name, middle_Name, last_Name, mobile_No, email, d_o_b, joining_Date, group_Name, password, gender, marital_Status, status};
  
    if(user_Id){
      UserService.UpdateUser(user_Id, User).then((response) => {
      console.log(response.data);
      navigate('/UserList');
       }).catch(error => {
      console.log(error);
    }) 
  }
  else{
    UserService.postUser(User).then((response) => {
      console.log(response.data);
      navigate('/UserList');
   }).catch(error => {
      console.log(error);
    })
  }
    
}

useEffect(() => {
  UserService.getUserByID(user_Id).then((response) => {
    setFirst_Name(response.data.first_Name)
    setLast_Name(response.data.last_Name)
    setMiddle_Name(response.data.middle_Name)
    setMobile_No(response.data.mobile_No)
    setEmail(response.data.email)
    setD_o_b(response.data.d_o_b)
    setJoining_Date(response.data.joining_Date)
    setGender(response.data.gender)
    setGroup_Name(response.data.group_Name)
    setPassword(response.data.password)
    setMarital_Status(response.data.marital_Status)
    setStatus(response.data.status)
  })
},[])

const title = () =>{

  if(user_Id){
    return <h4 className='page-head'>Update User Details</h4>
  }
  else{
    return <h4 className='page-head'>Register New User</h4>
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
         <TextField label="User ID" value ={user_Id} name = "user_Id" InputProps={{ readOnly: true,}} variant="outlined" />
         <TextField label="First Name" value ={first_Name} name = "first_Name" onChange={(e) => setFirst_Name(e.target.value)} variant="outlined" />
         <TextField label="Middle Name" value ={middle_Name} name = "middle_Name" onChange={(e) => setMiddle_Name(e.target.value)} variant="outlined" />
         <TextField label="Last Name" value ={last_Name} name = "last_Name" onChange={(e) => setLast_Name(e.target.value)} variant="outlined" />
         <TextField label="Mobile Number" value ={mobile_No} name = "mobile_No" onChange={(e) => setMobile_No(e.target.value)} variant="outlined" />
         <TextField label="Email ID" value ={email} name = "email_Id" onChange={(e) => setEmail(e.target.value)} variant="outlined" />
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Date of Birth" value={d_o_b} name = "d_o_b" onChange={handleDOB}
            maxDate={new Date()}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Joining Date" selected={joining_Date} value={joining_Date} name = "joining_Date" onChange={handleJoining_Date}
            dateFormat = 'yyyy-MM-dd' 
            maxDate={new Date()}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={group_Name} name = "group_Name" label="Group" onChange={handleGroup_Name} >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'CHO'}>CHO</MenuItem>
          <MenuItem value={'Expert'}>Expert</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Password" value ={password} name = "password" onChange={(e) => setPassword(e.target.value)} variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={gender} name = "gender" label="Gender" onChange={handleGender}>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={marital_Status} name = "marital_Status" label="Marital Status" onChange={handleMarital_Status}>
          <MenuItem value={'Married'}>Married</MenuItem>
          <MenuItem value={'Unmarried'}>Unmarried</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={status} name = "status" label="Status" onChange={handleStatus}>
          <MenuItem value={'Active'}>Active</MenuItem>
          <MenuItem value={'Inactive'}>Inactive</MenuItem>
        
        </Select>
      </FormControl>
         </Box>
         </Paper>
         <button type="submit" onClick ={(e) => saveUser(e)} className="btn btn-primary save-btn">
                Submit
          </button>
        </div>
      </div>
    </div>
  );
}


