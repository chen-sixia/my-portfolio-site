import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>

        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px',fontFamily:'Fjalla One'}}>{this.props.status}</h4>
          <h6 style={{marginTop:'0px', fontFamily:'Fjalla One'}}>{this.props.schoolName}</h6>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
