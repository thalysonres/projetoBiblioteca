import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Auth from './pages/Auth';
import StudentList from './pages/Student/StudentList';
import StudentForm from './pages/Student/StudentForm';

function Routes(){
  return(
    <BrowserRouter>
    <Route path="/auth" exact component={Auth} />
    <Route path="/students" exact component={StudentList} />
    <Route path="/students/edit/:id" exact component={StudentForm} />
    </BrowserRouter>    
  );
}

export default Routes; 
