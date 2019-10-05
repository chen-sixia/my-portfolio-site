import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sixia Chen</h2>
            <img src="./avatar2.png" alt="avatar" style={{height:'250px'}}/>
            <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}>feel free to contact me :)</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
          <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'20px', fontFamily:'Fjalla One'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +81-80-3848-2601
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'20px', fontFamily:'Fjalla One'}}>
                    <i className="fa fa-envelope-square" aria-hidden="true" />reveriexsc@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
