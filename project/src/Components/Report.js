import './App.css';
import './table.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Healthcard from './Healthcard';
import Healthcard_BasicScreening from './Healthcard_BasicScreening';
import TemporaryDrawer from './navbar';
import { useNavigate } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import {TableBody, IconButton, InputBase, TextField, MenuItem, FormControl,
        TableCell, TableContainer, TableHead, Box, InputLabel, Select, Divider,
        TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';


export default function Report() {

  const [Block, setBlock] = React.useState('');

  const handleBlock = (event) => {
    setBlock(event.target.value);
  };

  const [School, setSchool] = React.useState('');

  const handleSchool = (event) => {
    setSchool(event.target.value);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

	
    const navLog = useNavigate();
	return (
        <div>
        <TemporaryDrawer/>
        <h4 className='page-head'>Report</h4>
        <div className="">
        <div  component="form">
        </div>
        <Paper className="Table-Paper">
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th><h5 className='hcard-head'>Block</h5></th>
            <th><h5 className='hcard-head'>Total Screening Done</h5></th>
        </tr>
        <tr>
            <th>Ambegaon</th>
            <th> </th>
          
        </tr>
        <tr>
            <th>Baramati</th>
            <th> </th>
           
        </tr>
        <tr>
            <th>Bhor</th>
            <th> </th>
            
        </tr>
        <tr>
            <th>Daund</th>
            <th> </th>
        </tr>
        <tr>
            <th>Haveli</th>
            <th> </th>
            
        </tr>
        <tr>
            <th>Indapur</th>
            <th> </th>
            
        </tr>
        <tr>
            <th>Junnar</th>
            <th> </th>
           
        </tr>
        <tr>
            <th>Khed</th>
            <th> </th>
           
        </tr>
        <tr>
            <th>Maval</th>
            <th> </th>
           
        </tr>
        <tr>
            <th>Mulshi</th>
            <th> </th>
          
        </tr>
        <tr>
            <th>Pune</th>
            <th> </th>
          
        </tr>
        <tr>
            <th>Purandar</th>
            <th> </th>
           
        </tr>
        <tr>
            <th>Shirur</th>
            <th> </th>
            
        </tr>
        <tr>
            <th>Velhe</th>
            <th> </th>
            
        </tr>
        <tr>
            <th>Total</th>
            <th> </th>
           
        </tr>
        </tbody>
        </table>
    </Paper>
        </div>
        </div>
    );
    }
