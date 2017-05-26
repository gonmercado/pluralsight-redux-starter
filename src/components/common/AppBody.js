import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import CoursesPage from '../course/CoursesPage';
import ManageCoursePage from '../course/ManageCoursePage';

const AppBody = () => {
  return (
    <div className="common common__body">
      <Route path="/" component={HomePage} exact/>
      <Route path="/courses" component={CoursesPage} history={history} />
      <Route path="/course" component={ManageCoursePage} history={history} exact />
      <Route path="/course/:id" component={ManageCoursePage} history={history} />
      <Route path="/about" component={AboutPage}/>
    </div>
  );
};

export default AppBody;
