import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Activities from './activities';
import Certificates from './certificates';

class Resume extends Component {
  render() {
    return(
      <div className="resume-body">
        <Grid>
          <Cell col={1}></Cell>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img src="./avatar.png"
                   alt="avatar"
                   style={{height:'200px'}}
                 />

            </div>
            <h2 style={{paddingTop:'2em'}}>Sixia Chen</h2>
            <h4 style={{color:'grey', fontFamily:"Fjalla One"}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #01ABAA', width:'50%'}}/>
            <p><i className="fa fa-map-pin" aria-hidden="true" style={{paddingRight:"1em"}}/>Japan</p>
            <p><i className="fa fa-phone" aria-hidden="true"  style={{paddingRight:"1em"}}/>+81-80-3848-2601</p>
            <p><i className="fa fa-envelope" aria-hidden="true"  style={{paddingRight:"1em"}}/>reveriexsc@gmail.com</p>
            <hr style={{borderTop: '3px solid #01ABAA', width:'50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={6}>
            <h2>Work Experience</h2>
            <Experience
              startYear={2019}
              endYear="Now"
              jobName="Full Stack Engineer"
              companyName="TIS Inc."
              jobDescription="working on a project to build an app for banking procedure (Java, Spring Boot, JavaScript, React Native)"
              />
            <Experience
             startYear="08/2018"
             endYear="10/2018"
             jobName="Full Stack Engineer"
             companyName="Patentfield"
             jobDescription="worked as a part-time web developer (Ruby, Ruby on Rails, JavaScript)"
             />
           <hr style={{borderTop: '2px solid #fff'}} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2019}
              status="Master's degree, Linguistics"
              schoolName="Kyoto university"
              schoolDescription="familiar with most of the subfields of linguistics, especially phonetics and phonology and linguistic typology.
  used Praat (a software for speech analysis) to analyze phonetics and phonology of Wu dialect, a variety of Chinese as my final thesis."

              />
            <Education
               startYear={2017}
               endYear={2016}
               status="Research student"
               schoolName="Kyoto university"
               />
            <Education
               startYear={2011}
               endYear={2015}
               status="Bachelor's degree, Chinese Language and Literature"
               schoolName="Communication University of Zhejiang"
               />
             <hr style={{borderTop: '2px solid #fff'}} />
             <h2>Extra-curricular Activities</h2>
              <Activities
                date="02/2018"
                activityName="Overseas Field Research on the Economy of South Korea "
                activityLocation="Kyungpook National University, Daegu"
                />
              <Activities
                date="09/2017"
                activityName="Overseas Study Program on Vietnamese Language and Culture at Vietnam"
                activityLocation="Vietnam National University, Hanoi"
                />
              <Activities
                date="08/2017"
                activityName="International Volunteer Program"
                activityLocation="Kyoto, Japan"
                activityDescription="China-Japan-Korea SERVE Initiative 2017"
                />
             <hr style={{borderTop: '2px solid #fff'}} />
             <h2>Skills</h2>
             <Skills skill="Python" progress={80}/>
             <Skills skill="Java" progress={80}/>
             <Skills skill="JavaScript" progress={80}/>
             <Skills skill="English" progress={80}/>
             <Skills skill="Japanese" progress={80}/>
             <hr style={{borderTop: '2px solid #fff'}} />
             <h2>Certificates</h2>
             <Certificates certificateName="JLPT N1" />
             <Certificates certificateName="TOEFL iBT 91" />
             <Certificates certificateName="TOEIC Listening & Reading Test 950" />
             <Certificates certificateName="TOPIK A2" />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
