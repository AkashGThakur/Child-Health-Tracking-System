import './App.css';
import React, {useState, useEffect} from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {TableBody, IconButton, InputBase,
    TableCell, TableContainer, TableHead, 
    TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';
import HealthcardList from './HealthcardList';
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChildService from '../Services/ChildService';
import FamilyService from '../Services/FamilyService';


export default function Healthcard({child_id}) {

     const [firstName, setFirstName] = useState('');
     const [lastName,  setLastName] = useState('');
     const [gender,    setGender] = useState('');
     const [age,       setAge] = useState('');
     const [birthdate, setBirthdate] = useState(null);
     const [fatherName, setFatherName] = useState('');

    const navLog = useNavigate();

    useEffect(() => {
        ChildService.getChildByID(child_id).then((response) => {
          setFirstName(response.data.firstName)
          setLastName(response.data.lastName)
          setBirthdate(response.data.birthdate)
          setGender(response.data.gender)
          setAge(response.data.age)
        })
        FamilyService.getFamilyByID(child_id).then((response) => {
          setFatherName(response.data.fatherName)
        })
    },[])
  return (
    <div>
    <div className='hlt-head'>
            <button type="submit" onClick ={() => {navLog("/HealthcardList");}} className="btn btn-primary back-button">
            <ArrowBackIosNewIcon/>
             </button>
             <h3 className='healthcard-head'>Child Healthcard</h3>
    </div>
    <div className='Healthcard-Basic'>
            <Row>
            <Col sm={2}>
                <img src='child-default.png' className='child-image'></img>
            </Col>
            <Col sm={2}>
                <h6>Student ID</h6>
                <h5 id="ChildId">{child_id}</h5>
                <h6>Student Name</h6>
                <h5 id="ChildName">{firstName} {lastName}</h5>
            </Col>
            <Col sm={2}>
                <h6>Father's Name</h6>
                <h5 id="ChildId">{fatherName}</h5>
            </Col>
            <Col sm={2}>
                <h6>Gender</h6>
                <h5 id="Gender">{gender}</h5>
            </Col>
            <Col sm={2}>
                <h6>D.O.B</h6>
                <h5 id="dob">{birthdate}</h5>
            </Col>
            <Col sm={2}>
                <h6>Age</h6>
                <h5><span id="age">{age}</span> Year's</h5>
            </Col>
            </Row>
    </div>
    </div>
  );
}


