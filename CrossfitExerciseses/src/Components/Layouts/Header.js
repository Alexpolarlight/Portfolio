import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'


export default props =>
    <AppBar position="static" style={{backgroundColor: '#212121'}}>
      <Toolbar>
        <Typography variant="headline" color='inherit'>
          Exercise database
        </Typography>
      </Toolbar>
    </AppBar>
