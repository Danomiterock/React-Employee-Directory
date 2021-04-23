import React from "react";
import API from "./API";
import EmployeeTable from "./components/EmployeeTable";
import Jumbo from "./components/Jumbo";


class App extends React.Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Jumbo handleInputChange={this.handleInputChange}/>
        <EmployeeTable employees={this.state.employees.filter(this.filterEmployees)} />
      </>
    );
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    this.setState({search: searchTerm});
  }

  filterEmployees = (employee) => {
    if (employee.name.first.includes(this.state.search)) return true;
    if (employee.name.last.includes(this.state.search)) return true;
    if (employee.phone.includes(this.state.search)) return true;
    if (employee.email.includes(this.state.search)) return true;
    if (employee.dob.date.includes(this.state.search)) return true;

    return false
  } 
  }

export default App;
