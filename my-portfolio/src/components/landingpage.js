import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://s3-us-west-2.amazonaws.com/urdbmedia/ef9dc240-6c28-012e-c457-12313b08c902_xl.jpg"
                            alt="avatar"
                            className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Wassup Bitchez</h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage; 