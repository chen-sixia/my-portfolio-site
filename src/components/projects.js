import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Icon, CardActions, CardMenu, IconButton, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }
  toggleCategories(){
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
             <CardTitle expand style={{color:'black', height:'176px', background:'#FEDC3D'}}>
                 <h3 style={{marginTop: '0', textAlign:'center'}}>
                     Python Project #1<br />
                 </h3>
             </CardTitle>
             <CardText>adfkaslkfjaw;lefrklwae</CardText>
             <CardActions border >
                 <Button colored>GitHub</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
             </CardMenu>
         </Card>
         <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
            <CardTitle expand style={{color:'black', height:'176px', background:'#FEDC3D'}}>
                <h3 style={{marginTop: '0', textAlign:'center'}}>
                    Python Project #2<br />
                </h3>
            </CardTitle>
            <CardText>adfkaslkfjaw;lefrklwae</CardText>
            <CardActions border >
                <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div><h1>This is Java</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return(
        <div><h1>This is React</h1></div>
      )
    } else if(this.state.activeTab ===3) {
      return(
        <div><h1>This is React Native</h1></div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={ this.state.activeTab}
              onChange={(tabId) => this.setState({ activeTab: tabId})}
              ripple>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
          <Tab>React</Tab>
          <Tab>React Native</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
