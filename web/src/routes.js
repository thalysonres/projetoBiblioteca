import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/auth" exact component={Auth} />
      <Route path="/students" exact component={StudentsList} />
      <Route path="/studentsform" exact component={StudentsForm} />
      <Route path="/studentsform/:id" exact component={StudentsForm} />
      {/* <Route path="/students/:id" exact component={StudentsForm} /> */}
      <Route path="/employees" exact component={EmployeesList} />
      <Route path="/employeesform" exact component={EmployeesForm} />
      {/* <Route path="/employees/:id" exact component={EmployeesForm} /> */}
      <Route path="/authors" exact component={AuthorsList} />
      <Route path="/authorsform" exact component={AuthorsForm} />
      {/* <Route path="/authors/:id" exact component={AuthorsForm} /> */}
      <Route path="/localities" exact component={LocalitiesList} />
      <Route path="/localitiesform" exact component={LocalitiesForm} />
      {/* <Route path="/localities/:id" exact component={LocalitiesForm} /> */}
      <Route path="/loans" exact component={LoansList} />
      <Route path="/loansform" exact component={LoansForm} />
      {/* <Route path="/loans/:id" exact component={LoansForm} /> */}
      <Route path="/studentloans" exact component={StudentLoansList} />
      <Route path="/literaryworks" exact component={LiteraryWorksList} />
      <Route path="/literaryworksform" exact component={LiteraryWorksForm} />
      <Route path="/literaryworksinfo" exact component={LiteraryWorksInfo} />
    </BrowserRouter>
  );
}

export default Routes;
