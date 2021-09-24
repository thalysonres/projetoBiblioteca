import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Auth from './pages/Auth';
import StudentsList from './pages/Students/StudentsList';
import StudentsForm from './pages/Students/StudentsForm';
import EmployeesList from './pages/Employees/EmployeesList';
import EmployeesForm from './pages/Employees/EmployeesForm';
import AuthorsList from './pages/Authors/AuthorsList';
import AuthorsForm from './pages/Authors/AuthorsForm';
import LocalitiesList from './pages/Localities/LocalitiesList';
import LocalitiesForm from './pages/Localities/LocalitiesForm';
import LoansList from './pages/Loans/LoansList';
import LoansForm from './pages/Loans/LoansForm';
import StudentLoansList from './pages/StudentLoans/StudentLoansList';
import LiteraryWorksList from './pages/LiteraryWorks/LiteraryWorksList';
import LiteraryWorksForm from './pages/LiteraryWorks/LiteraryWorksForm';
import LiteraryWorksInfo from './pages/LiteraryWorks/LiteraryWorksInfo';

const Rota = ({...rest}) => {
  if( localStorage.getItem('logadoUser') && localStorage.getItem('logadoUser') !== '' ){
    axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('logadoUser')}`
    return (
      <Route { ...rest } />
    )
  }else {
    return(
      <Redirect to="auth" />
    )
  }
}

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Auth} />

      <Route path="/auth" exact component={Auth} />
      <Rota path="/students" exact component={StudentsList} />
      <Rota path="/studentsForm" exact component={StudentsForm} />
      <Rota path="/studentsForm/:id" exact component={StudentsForm} />
      {/* <Rota path="/studentform/:id" exact component={StudentsForm} /> */}
      <Rota path="/employees" exact component={EmployeesList} />
      <Rota path="/employeesform" exact component={EmployeesForm} />
      <Rota path="/employeesform/:id" exact component={EmployeesForm} />
      {/* <Rota path="/employees/:id" exact component={EmployeesForm} /> */}
      <Rota path="/authors" exact component={AuthorsList} />
      <Rota path="/authorsform" exact component={AuthorsForm} />
      <Rota path="/authorsform/:id" exact component={AuthorsForm} />
      {/* <Rota path="/authorsform/:id" exact component={AuthorsForm} /> */}
      <Rota path="/localities" exact component={LocalitiesList} />
      <Rota path="/localitiesform" exact component={LocalitiesForm} />
      <Rota path="/localitiesform/:id" exact component={LocalitiesForm} />
      {/* <Rota path="/localities/:id" exact component={LocalitiesForm} /> */}
      <Rota path="/loans" exact component={LoansList} />
      <Rota path="/loansform" exact component={LoansForm} />
      <Rota path="/loansform/:id" exact component={LoansForm} />
      {/* <Rota path="/loans/:id" exact component={LoansForm} /> */}
      <Rota path="/studentloans" exact component={StudentLoansList} />
      <Rota path="/literaryworks" exact component={LiteraryWorksList} />
      <Rota path="/literaryworksform" exact component={LiteraryWorksForm} />
      <Rota path="/literaryworksform/:id" exact component={LiteraryWorksForm} />
      <Rota path="/literaryworksinfo" exact component={LiteraryWorksInfo} />

    </BrowserRouter>
  );
}

export default Routes;
