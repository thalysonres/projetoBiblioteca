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

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/auth" exact component={Auth} />
      <Route path="/students" exact component={StudentsList} />
      <Route path="/studentsForm" exact component={StudentsForm} />
      <Route path="/studentsForm/:id" exact component={StudentsForm} />
      {/* <Route path="/students/:id" exact component={StudentsForm} /> */}
      <Route path="/employees" exact component={EmployeesList} />
      <Route path="/employeesForm" exact component={EmployeesForm} />
      {/* <Route path="/employees/:id" exact component={EmployeesForm} /> */}
      <Route path="/authors" exact component={AuthorsList} />
      <Route path="/authorsForm" exact component={AuthorsForm} />
      {/* <Route path="/authors/:id" exact component={AuthorsForm} /> */}
      <Route path="/localities" exact component={LocalitiesList} />
      <Route path="/localitiesForm" exact component={LocalitiesForm} />
      {/* <Route path="/localities/:id" exact component={LocalitiesForm} /> */}
      <Route path="/loans" exact component={LoansList} />
      <Route path="/loansForm" exact component={LoansForm} />
      {/* <Route path="/loans/:id" exact component={LoansForm} /> */}
    </BrowserRouter>
  );
}

export default Routes;
