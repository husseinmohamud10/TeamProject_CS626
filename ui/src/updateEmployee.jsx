import React from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import graphQLFetch from './graphQlFetch';

export default function UpdateEmployee() {
    const { empid } = useParams();
    console.log({empid});
  
    showdetails({empid});
    loadData();
    return (
        <h2>This is a placeholder for editing issue {empid}</h2>
    );
}
async function loadData() {
 const query = `query EmployeesList {
    EmployeesList {
      empid
      fullName
      address
      age
      email
      phoneNumber
    }        
  }`
  const response =  await fetch(window.ENV.UI_API_ENDPOINT, {
    method:'POST',
    headers:{'content-type':'application/json'}
    ,body:JSON.stringify({query})
  })
  const data =  await response.json();
    if (data) setState({ employees: data });
    console.log(employees);
}
async function showdetails ({empid}) {
    console.log("Inside showdetails");
    // const query = `query getEmployeebyId ($empid : Int!) {
    //     getEmployeebyId(empid: $empid) {
    //     empid
    //     fullName
    //     address
    //     age
    //     email
    //     phoneNumber
    //   }        
    // }`
    console.log({empid});
    const response =  await fetch(window.ENV.UI_API_ENDPOINT, {
        method:'POST',
        headers:{'content-type':'application/graphql'}
        ,body:JSON.stringify({query:`query getEmployeebyId($empid : Int!) {
          getEmployeebyId(empid: $empid}) {
          empid
          fullName
          address
          age
          email
          phoneNumber
        }        
      }`},{empid})
    })
     console.log(response) ;
    const rsponseBody =  await response.json();
    console.log(rsponseBody);
    //return rsponseBody.data;
   if (rsponseBody) {
       loadData();
   }
    console.log(response);
    return response.data;
    }

const element = <UpdateEmployee />;
  
  ReactDOM.render(element, document.getElementById('contents'));