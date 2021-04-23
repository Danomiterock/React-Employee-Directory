import React from "react";
import API from "./API";
import EmployeeTable from "./components/EmployeeTable";
import Jumbo from "./components/Jumbo";
import Moment from 'moment';

class App extends React.Component {
  state = {
    employees: [],
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
        <Jumbo />
        <EmployeeTable employees={this.state.employees} />
      </>
    );
  };
  
  // constructor() {
  
  //   this.state = {
  //     dateDMY: Moment("1994-07-01").format('DD-MM-YYYY'),
  //   };
  // };
  
//   render() {
//     return (
//       <div>
//         <p> DMY Format: { this.state.dateDMY } </p>
//       </div>
//     );
//   }
// }
}

export default App;
