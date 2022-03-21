import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import AddEmployee from './addEmployee.jsx';
import ListEmployees from './listEmployees.jsx';
import UpdateEmployee from './updateEmployee.jsx';
import DeleteEmployee from './deleteEmployee.jsx';
import Page404 from './Page404.js';


export default function Contents() {  
   
    return (
      
    <Routes>
      <Route  path="/"  element = {<Navigate replace to = "/listEmployees" />}  />
      <Route path="/listEmployees" element={<ListEmployees />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/edit/:empid" element={<UpdateEmployee />} />
      <Route path="/delete/:empid" element={<DeleteEmployee />} />
      <Route path="/*"  element = {<Page404/>}  />     
    </Routes>
    
  );
}
