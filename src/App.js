import React, { Component } from 'react';
import Header from './jsx/Header.jsx'
import SideBar from './jsx/SideBar.jsx'
import MainContent from './jsx/MainContent.jsx'
import companyData from './json/company.json'
import './App.css';
import './css/sidebar.css';
import './css/header.css';
import './css/maincontent.css';

class App extends Component {
  render() {
    console.log(companyData);
    return (
      <div id="app" className="toggled">
        <Header />
        <SideBar />
        <MainContent companyData={companyData.user} />
      </div>
    );
  }
}

export default App;
