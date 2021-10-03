import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBarAdmin =() =>{
return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div >
        <NavLink exact  className="btn btn-success" style={{'marginRight':'3px'}} to="/admin">Home</NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" style={{'marginRight':'3px'}} to='/admin/productlist'>Add Product</NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" style={{'marginRight':'3px'}} to='/admin/update'>Update</NavLink>
        <br/>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" style={{'marginRight':'3px'}} to='/admin/delete'>Delete </NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" style={{'marginRight':'3px'}} to='/admin/view'>View </NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" to='/admin/statistic'>Statistic </NavLink>
        </div>
    </div>
    </>
);
};

export default NavBarAdmin;