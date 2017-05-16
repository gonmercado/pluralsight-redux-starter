import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import CoursesPage from '../course/CoursesPage';

const AppBody = () => {
  return (
    <div className="common common__body">
      <Route path="/" component={HomePage} exact/>
      <Route path="/courses" component={CoursesPage}/>
      <Route path="/about" component={AboutPage}/>
    </div>
  );
};

export default AppBody;
