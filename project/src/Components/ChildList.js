import './App.css';
import './table.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Header';
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
import ChildService from '../Services/ChildService';
//import bootstrap from 'bootstrap';


export default function ChildList() {

  const navigate = useNavigate();

  const [Child, setChild] = useState([]);
  const [Block, setBlock] = useState('');

  useEffect(() => {
    getAllChild();
  },[])

  const getAllChild = ( ) =>{
    ChildService.getChild().then((response) => {
      setChild(response.data)
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }

    const deleteChild = (child_id) => {
        console.log(child_id);
        ChildService.deleteChildByID(child_id).then((response) => {
          getAllChild();
       }).catch(error => {
         console.log(error);
        })  
   }

  const handleBlock = (event) => {
    setBlock(event.target.value);
  };

  const [School, setSchool] = useState('');

  const handleSchool = (event) => {
    setSchool(event.target.value);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
        <h4 className='page-head'>Child List</h4>
        <div>
            <button type="submit" onClick ={() => {navLog("/AddNewChild");}} className="btn btn-primary add-button">
                Add New Child
             </button>
        </div>
        <div>
        <Row>
        <Col sm={7}>
        <Paper className="form-search">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Block</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Block}
              label="Select Block"
              onChange={handleBlock}
              >
              <MenuItem value={10}>Ambegaon</MenuItem>
              <MenuItem value={20}>Baramati</MenuItem>
              <MenuItem value={30}>Bhor</MenuItem>
              <MenuItem value={40}>Daund</MenuItem>
              <MenuItem value={50}>Haveli</MenuItem>
              <MenuItem value={60}>Indapur</MenuItem>
              <MenuItem value={70}>Junnar</MenuItem>
              <MenuItem value={80}>Khed</MenuItem>
              <MenuItem value={90}>Maval</MenuItem>
              <MenuItem value={100}>Mulshi</MenuItem>
              <MenuItem value={110}>Pune</MenuItem>
              <MenuItem value={120}>Purandar</MenuItem>
              <MenuItem value={130}>Shirur</MenuItem>
              <MenuItem value={140}>Velhe</MenuItem>
              </Select>
          </FormControl>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select School</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={School}
              label="Select School"
              onChange={handleSchool}
              >
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>CHO</MenuItem>
              <MenuItem value={30}>Expert</MenuItem>
              </Select>
          </FormControl>
          </Box>
          <button type="submit" onClick ={() => {}} className="btn btn-primary child-search" 
          sx={{'& > :not(style)': { width: '10ch' },}}>
                Search
          </button>
          </Paper>
          </Col>
          <Col sm={1}>
          <h4 id="or">OR</h4>
          </Col>
          <Col sm={4}>
          <Paper className="search-child-paper">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
          <TextField id="outlined-basic" label="Child ID" variant="outlined" />
          </Box>
          <button type="submit" onClick ={() => {}} className="btn btn-primary child-search-id" 
          sx={{'& > :not(style)': { width: '10ch' },}}>
                Search
          </button>
          </Paper>
          </Col>
          </Row>
        </div>
        <div className="">
        <div  component="form">
        <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        </Row>
        </div>
        <Paper className="Table-Paper">
        <Table stickyHeader aria-label="user list table" className="Table">
        <TableHead className='head-table'>
            <TableRow>
              <TableCell >Child ID</TableCell>
              <TableCell >Child Name</TableCell>
              <TableCell>Child Age</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>School Name</TableCell>
              <TableCell>Added By</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Child.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (<TableRow key={data.child_id}>
            <TableCell className='col-table'>{data.child_id}</TableCell>
            <TableCell className='col-table'>{data.firstName} {data.lastName}</TableCell>
            <TableCell className='col-table'>{data.age}</TableCell>
            <TableCell className='col-table'>{data.school.block}</TableCell>
            <TableCell className='col-table'>{data.school.schoolName}</TableCell>
            <TableCell className='col-table'>{data.userList.first_Name}</TableCell>
            <TableCell className='col-table'>
            <EditIcon className="icon-edit" onClick ={() => {navLog(`/UpdateChild/${data.child_id}`);}}/>
            <DeleteIcon className="icon-delete" onClick ={() => {deleteChild(data.child_id)}}/>
            </TableCell>
          </TableRow>))}
            
          </TableBody>
        </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100, 500]}
        component="div"
        count={Child.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
        </div>
    );
    }
