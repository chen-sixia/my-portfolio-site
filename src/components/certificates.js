import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certificates extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex' , fontFamily:"Fjalla One"}}>
            <i className="fa fa-certificate" aria-hidden="true"  style={{paddingRight:"1em"}}/>
            {this.props.certificateName}
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Certificates;
