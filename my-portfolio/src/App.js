import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
    <Layout fixedHeader>
        <Header title="Stephanie George" className="header-color">
            <Navigation>
                <Link to="/projects">projects</Link>
                <Link to="/art">art</Link>
                <Link to="/about">about</Link>
                <Link to="/resume">resume</Link>
            </Navigation>
        </Header>
        <Content>
          <div className="page-content"></div>
          <Main></Main>
        </Content>
    </Layout>
</div>
  );
}

export default App; 
