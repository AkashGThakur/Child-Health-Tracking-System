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
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Healthcard from './Healthcard';
import HealthcardNav from './HealthcardNav';
import BMISService from '../Services/BMISService';



export default function Healthcard_BMI() {

    const {child_id} = useParams();    
    const navLog = useNavigate();

    const [height,  setHeight] = useState('');
      const [weight,  setWeight] = useState('');
      const [bmi,     setBmi] = useState('');
      const [height_for_age,  setHeightForAge] = useState('');
      const [weight_for_age,  setWeightForAge] = useState('');
      const [arm_size,    setArmSize] = useState('');
      const [age,    setAge] = useState('');
      const [birthdate, setBirthdate] = useState(null);

      useEffect(() => { 
        BMISService.getChildByID(child_id).then((response) => {
          setBmi(response.data.bmi)
          setArmSize(response.data.arm_size)
          setWeight(response.data.weight)
          setWeightForAge(response.data.weight_for_age)
          setHeight(response.data.height)
          setHeightForAge(response.data.height_for_age)
        })  
    },[])

  return (
    <div>
    <TemporaryDrawer/>
    <Healthcard child_id ={child_id}/>
    <div>
    <Row>
        <Col sm={3}>
        <HealthcardNav child_id ={child_id}/>
        </Col>
        <Col sm={9}>
        <div className='healthcard-report'>
        <h5 className='hcard-head'>BMI Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Height- cm</th>
            <td>{height}</td>
            <th>Weight- Kg</th>
            <td>{weight}</td>
        </tr>
        <tr>
            <th>BMI</th>
            <td>{bmi}</td>
            <th>Arm Size</th>
            <td>{arm_size}</td>
        </tr>
        <tr>
            <th>Weight for age</th>
            <td>{weight_for_age}</td>
            <th>Height for age</th>
            <td>{height_for_age}</td>
        </tr>
        </tbody>
        </table>
        <p>  </p>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


