import React from 'react'

// Get the right things for the headings and all
import Typography from '@material-ui/core/Typography'
// or could say:
// import { Typography } from '@material-ui/core' --> slightly less 
// Default typography tage <Typography></Typography> is a paragraph tag.


export default function Create() {
  return (
    <div>
      <Typography
        // look like h6, but outputs h2
        variant="h6"
        color="textSecondary" // Different to "secondary"
        component="h2"
        // Inspecting element, you see orange little margin below text
        gutterBottom
      >
        Create a New Note
      </Typography>
    </div>
  )
}

/*
export default function Create() {
  return (
    <div>
      <Typography 

        // below things are what we call "props" --> variant thing, colour thing, etc.

        variant="h1"
        // gotta use theme colours, could be "secondary"
        color="primary"
        align="center"
      >
        Create a new Note
      </Typography>
    </div>
  )
}
*/

/*
export default function Create() {
  return (
    <div>
      <Typography 
        colour="primary"
        noWrap
        // https://mui.com/material-ui/api/typography/ 
      >
        Lorum ipsum efowifnwioejfiowejfiowjfiowjofwejioefwjiowefj wfejiewojfiwjfiwejfiowejfiowejfiwjefo  wifjiowejfiwejfiwe jwfeoijfe
      </Typography>
    </div>
  )
}
*/