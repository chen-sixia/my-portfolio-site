import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Activities extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.date}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px', fontFamily:"Fjalla One"}}>{this.props.activityName}</h4>
          <p><i className="fa fa-map-pin" aria-hidden="true" style={{paddingRight:"1em"}}/>{this.props.activityLocation}</p>
          <p>{this.props.activityDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Activities;
