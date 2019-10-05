import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="./avatar0.png"
                 alt="avatar"
                 className="avatar-img"/>
               <div className="banner-text">
                 <h1 style={{ fontFamily: "Fjalla One", paddingTop:"1em"}}>Full Stack Engineer</h1>
                 <hr/>
               <p style={{ fontFamily: "Oxygen"}}>Python | Java | JavaScript | React | React Native |
                 HTML&CSS | CommandLine | Git</p>
               </div>
               <div className="social-links">
                 {/* GitHub */}
                 <a href="https://github.com/Silvia93" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-github-square" aria-hidden="true" />
                 </a>
                 {/* linkedin */}
                 <a href="https://www.linkedin.com/in/%E6%80%9D%E9%81%90-%E9%99%B3-543704152/" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-linkedin-square" aria-hidden="true" />
                 </a>
                 {/* Facebook */}
                 <a href="https://www.facebook.com/shika.chen.79" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-facebook-square" aria-hidden="true" />
                 </a>
               </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
