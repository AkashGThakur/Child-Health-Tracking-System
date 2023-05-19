import './App.css';
import './table.css';
import { useNavigate, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
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
import SchoolService from '../Services/SchoolService';
import ChildService from '../Services/ChildService';
import FamilyService from '../Services/FamilyService';
import ChildAddressService from '../Services/ChildAddressService';


export default function UpdateChild(){


  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName] = useState('');
  const [gender,    setGender] = useState('');
  const [adhar_no,  setAdhar_No] = useState('');
  const [age,       setAge] = useState('');
  const [birthdate, setBirthdate] = useState(null);
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [parentsMobileNo, setParentsMobileNo] = useState('');
  const [siblings,   setSiblings] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [block,  setBlock] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [schoolName, setSchoolName] = useState([]);
  const [insurance_no, setInsurance_No] = useState([]);
  const [user_Id, setUser_Id] = useState('');
  const {child_id} = useParams();  

  const navigate = useNavigate();      


  const [Group, setGroup] = React.useState('');

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleBirthdate = (event) => {
    // let myDate = moment(event).format('L');
    let myDate = moment(event).format('YYYY-MM-DD');
    setBirthdate(myDate);
   };
  
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const saveChild = (e) => {
    e.preventDefault();

    const Child = {firstName, lastName, gender, adhar_no, age, birthdate, registrationNo, user_Id, insurance_no};
    console.log(Child);

    const Family = {fatherName, motherName, parentsMobileNo, siblings, fatherOccupation, motherOccupation,}
    console.log(Family);
    
    const ChildAddress = {houseNo, area, street, pincode}
    console.log(ChildAddress);

    // SchoolService.UpdateSchool(registrationNo, School).then((response) => {
    //   console.log(response.data);
    //    }).catch(error => {
    //   console.log(error);
    // }) 
    ChildService.UpdateChild(child_id, Child).then((response) => {
      console.log(response.data);
       }).catch(error => {
      console.log(error);
    })
    FamilyService.UpdateFamily(child_id, Family).then((response) => {
      console.log(response.data);
       }).catch(error => {
      console.log(error);
    }) 
    ChildAddressService.UpdateChildAddress(child_id, ChildAddress).then((response) => {
      console.log(response.data);
      navigate('/ChildList');
       }).catch(error => {
      console.log(error);
    }) 
  }

  useEffect(() => {
    ChildService.getChildByID(child_id).then((response) => {
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setBirthdate(response.data.birthdate)
      setGender(response.data.gender)
      setAdhar_No(response.data.adhar_no)
      setAge(response.data.age)
      setInsurance_No(response.data.insurance_no)
      setUser_Id(response.data.UserList.user_Id)
      setRegistrationNo(response.data.registrationNo)
    })
    SchoolService.getSchoolByID(registrationNo).then((response) => {
      setSchoolName(response.data.schoolName)
    })
    FamilyService.getFamilyByID(child_id).then((response) => {
      setFatherName(response.data.fatherName)
      setMotherName(response.data.motherName)
      setSiblings(response.data.siblings)
      setParentsMobileNo(response.data.parentsMobileNo)
      setFatherOccupation(response.data.fatherOccupation)
      setMotherOccupation(response.data.motherOccupation)
    })
    ChildAddressService.getChildAddressByID(child_id).then((response) => {
      setHouseNo(response.data.houseNo)
      setStreet(response.data.street)
      setArea(response.data.area)
      setPincode(response.data.pincode)
    })
},[])

  return (
    <div>
    <TemporaryDrawer/>
      <div>
        <h4 className='page-head'>Update Child Information</h4>
        <div>
          
          <Paper className="form-add">
          <h5 className='page-subhead'>Add Child School Details</h5>
        <Box
       component="form"
         sx={{
            
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
        
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">School Registration No.</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={registrationNo}
          label="School Registration No"
          onChange={(e) => setRegistrationNo(e.target.value)}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
        </FormControl>
        <TextField  label="User ID" value ={user_Id} name = "user_Id" onChange={(e) => setUser_Id(e.target.value)} variant="outlined" />
        </Box>
        </Paper>

        <Paper className="form-add">
        <Box component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
         <h5 className='page-subhead'>Child Information</h5>
         <TextField value ={child_id} name = "child_id" label="Child ID" InputProps={{ readOnly: true,}} variant="outlined" />
         <TextField value ={firstName} name = "firstName" onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined" />
         <TextField value ={lastName} name = "lastName" onChange={(e) => setLastName(e.target.value)}  label="Last Name" variant="outlined" />
         <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
            label="Date of Birth" selected={birthdate} value={birthdate} 
            name = "birthdate" onChange={handleBirthdate}
            dateFormat = 'yyyy-MM-dd' 
            maxDate={new Date()}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
         <TextField value ={age} name = "age" onChange={(e) => setAge(e.target.value)} label="Age" variant="outlined" />
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleGender}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField value ={adhar_no} name = "adhar_no" onChange={(e) => setAdhar_No(e.target.value)}  label="Aadhar Number" variant="outlined" /> 
         <TextField value ={insurance_no} name = "insurance_no" onChange={(e) => setInsurance_No(e.target.value)} label="Insurance Number" variant="outlined" />
      </Box>
         
         </Paper>

         <Paper className="form-add">
        <Box component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
        <h5 className='page-subhead'>Child Family Details</h5>
        <TextField value ={fatherName} name = "fatherName" onChange={(e) => setFatherName(e.target.value)}  label="Father Name" variant="outlined" />
        <TextField value ={motherName} name = "motherName" onChange={(e) => setMotherName(e.target.value)}  label="Mother Name" variant="outlined" />
        <TextField value ={parentsMobileNo} name = "parentsMobileNo" onChange={(e) => setParentsMobileNo(e.target.value)}  label="Parents Mobile No" variant="outlined" />
        <TextField value ={fatherOccupation} name = "fatherOccupation" onChange={(e) => setFatherOccupation(e.target.value)}  label="father Occupation" variant="outlined" />
        <TextField value ={motherOccupation} name = "motherOccupation" onChange={(e) => setMotherOccupation(e.target.value)}  label="Mother Occupation" variant="outlined" />
        <TextField value ={siblings} name = "siblings" onChange={(e) => setSiblings(e.target.value)}  label="Siblings" variant="outlined" />
         </Box>
         
        </Paper>

        <Paper className="form-add">
        <Box component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
        <h5 className='page-subhead'>Child Address Details</h5>
        <TextField value ={houseNo} name = "houseNo" onChange={(e) => setHouseNo(e.target.value)}  label="House No" variant="outlined" />
        <TextField value ={street} name = "street" onChange={(e) => setStreet(e.target.value)}  label="Street" variant="outlined" />
        <TextField value ={area} name = "area" onChange={(e) => setArea(e.target.value)}  label="Area" variant="outlined" />
        <TextField value ={pincode} name = "pincode" onChange={(e) => setPincode(e.target.value)}  label="Pincode" variant="outlined" />
         </Box>
               </Paper>
        
               <button type="submit"  onClick ={(e) => saveChild(e)} className="btn btn-primary save-button">Update Details</button>
        </div>
      </div>
    </div>
  );
}
