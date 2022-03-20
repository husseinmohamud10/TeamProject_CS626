import React from 'react';
import ReactDOM from 'react-dom';
import graphQLFetch from './graphQlFetch.js';
import {Route} from 'react-router-dom';
import ListEmployees from './listEmployees.jsx';

export default class AddEmployee extends React.Component{
  constructor(props,context) {
    super(props,context);
    
  //This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async createEmployee(employee) {
    const query = `mutation addEmployee($employee : inEmployee!){
      addEmployee(input: $employee)
        }`;
    const data = await graphQLFetch(query, { employee });
    if (data) {
      alert("Record Inserted Successfully!");
      this.redirect();
      // const navigate = useNavigate();
      //  navigate(<ListEmployees />);
     }
    } 
     redirect() {
      < Route> Component = {<ListEmployees />}</Route> 
     }
     
    
  
async handleSubmit(event) {
event.preventDefault();
const form = document.forms.employeeAdd;
const data = {
  empid : parseInt(form.empid.value),
  fullName: form.fullName.value,
  address : form.address.value,
  age : parseInt(form.age.value),
  email : form.email.value,
  phoneNumber : form.phoneNumber.value}
this.createEmployee(data);
}
render() { 
  return (
  <div title="Outer div" className="nav-bar">    
  <form name ="employeeAdd" onSubmit={this.handleSubmit}>
    <label>Employee Id: <input type="text" name="empid"/> </label><br/>
    <br/>
    <label>Full Name: <input type="text" name="fullName"/> </label><br/><br/>
    <label>Address: <input type="text" name="address"/> </label><br/><br/>
    <label>Age: <input type="text" name="age" /> </label><br/><br/>
    <label>Email: <input type="email" name="email" /> </label><br/><br/>
    <label>Phone No: <input type="text" name="phoneNumber" /> </label><br/><br/>
    <button>Submit</button>
  </form>
  </div>
);     
};
}

const element = <AddEmployee />;
  
  ReactDOM.render(element, document.getElementById('contents'));