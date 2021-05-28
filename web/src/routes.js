import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Auth from './pages/Auth';
import StudentsList from './pages/Students/StudentsList';
import StudentsForm from './pages/Students/StudentsForm';
import EmployeesList from './pages/Employees/EmployeesList';
import EmployeesForm from './pages/Employees/EmployeesForm';
import AuthorsList from './pages/Authors/AuthorsList';
import AuthorsForm from './pages/Authors/AuthorsForm';
import LocalitiesList from './pages/Localities/LocalitiesList';
import LocalitiesForm from './pages/Localities/LocalitiesForm';

function Routes(){
  return(
    <BrowserRouter>
    <Route path="/auth" exact component={Auth} />
    <Route path="/students" exact component={StudentsList} />
    <Route path="/students/:id" exact component={StudentsForm} />
    <Route path="/employees" exact component={EmployeesList} />
    <Route path="/employees/:id" exact component={EmployeesForm} />
    <Route path="/authors" exact component={AuthorsList} />
    <Route path="/authors/:id" exact component={AuthorsForm} />
    <Route path="/localities" exact component={LocalitiesList} />
    <Route path="/localities/:id" exact component={LocalitiesForm} />
    </BrowserRouter>    
  );
}

export default Routes; 
