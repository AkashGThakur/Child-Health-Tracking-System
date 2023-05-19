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
import {TableBody, IconButton, InputBase,
        TableCell, TableContainer, TableHead, 
        TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';
import UserService from '../Services/UserService';

export default function UserList() {

  const [User, setUser] = useState([]);
  
  const navLog = useNavigate();

  useEffect(() => {
    getAllUsers();
   },[])

   const getAllUsers = ( ) =>{
    UserService.getUser().then((response) => {
      setUser(response.data)
       console.log(response.data);
      }).catch(error =>{
       console.log(error);
      })
  }

   const deleteUser = (user_Id) => {
    console.log(user_Id);
    UserService.deleteUserByID(user_Id).then((response) => {
      getAllUsers();
   }).catch(error => {
     console.log(error);
    })  
}

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [value, setValue] = useState('');
  const [tableFilter, setTableFilter] = useState([]);

    const filterData = (e) => {
      if(e.target.value != ""){
        setValue(e.target.value);
        const filterTable = User.filter(o => Object.keys(o).some(k=>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
          ));
          setTableFilter([...filterTable])
      } else {
        setValue(e.target.value);
        setUser([...User])
      }  
    }  

	return (
        <div>
        <TemporaryDrawer/>
        <h4 className='page-head'>User List</h4>
        <div>
            <button type="submit" onClick ={() => {navLog("/RegisterUser");}} className="btn btn-primary add-button">
                Add New User
             </button>
        </div>
        <div className="">
        
        <Paper className="Table-Paper">
        <div  component="form">
        <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <div className='Search-div' sm>
            <div className='Search' sm>
              <Row>
              <Col sm={8} className="search-col">
              <InputBase
              placeholder="Search User"
              value={value}
              onChange={filterData}
              inputProps={{ 'aria-label': 'search user' }}
              />
               </Col>
               <Col sm={4}>
              </Col>
              </Row>
              </div>
              </div>
        </Col>
      </Row>
        
        </div>
        
        <Table stickyHeader aria-label="user list table" className="Table">
          <TableHead className='head-table'>
            <TableRow>
              <TableCell >User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Group</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {value.length > 0 ? tableFilter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (<TableRow key={data.user_Id}>
            <TableCell className='col-table'>{data.user_Id}</TableCell>
            <TableCell className='col-table'>{data.first_Name} {data.last_Name}</TableCell>
            <TableCell className='col-table'>{data.mobile_No}</TableCell>
            <TableCell className='col-table'>{data.email}</TableCell>
            <TableCell className='col-table'>{data.group_Name}</TableCell>
            <TableCell className='col-table'>{data.status}</TableCell>
            <TableCell className='col-table'>
            <EditIcon className="icon-edit" onClick ={() => {navLog(`/RegisterUser/${data.user_Id}`);}}/>
            <DeleteIcon className="icon-delete" onClick ={() => {deleteUser(User.user_Id)}}/>
            </TableCell>
          </TableRow>))
          :
          User.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (<TableRow key={data.user_Id}>
            <TableCell className='col-table'>{data.user_Id}</TableCell>
            <TableCell className='col-table'>{data.first_Name} {data.last_Name}</TableCell>
            <TableCell className='col-table'>{data.mobile_No}</TableCell>
            <TableCell className='col-table'>{data.email}</TableCell>
            <TableCell className='col-table'>{data.group_Name}</TableCell>
            <TableCell className='col-table'>{data.status}</TableCell>
            <TableCell className='col-table'>
            <EditIcon className="icon-edit" onClick ={() => {navLog(`/RegisterUser/${data.user_Id}`);}}/>
            <DeleteIcon className="icon-delete" onClick ={() => {deleteUser(User.user_Id)}}/>
            </TableCell>
          </TableRow>)) 
        }
            
          </TableBody>
        </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100, 500]}
        component="div"
        count={User.length}
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
