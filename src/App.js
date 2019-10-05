import React from 'react';
import './App.css';
import { Layout, Button, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color:'white', fontFamily:'Fjalla One'}} to="/">MY PORTFOLIO</Link>} scroll>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{ textDecoration: 'none', fontFamily:'Fjalla One'}} to="/">MY PORTFOLIO</Link>}>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
