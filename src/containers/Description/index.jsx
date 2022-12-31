/* eslint-disable react/prop-types */
import { Stack, Typography } from '@mui/material';
import React from 'react'
import LocationInformation from '../../components/LocationInformation';
import PaperInformation from '../../components/PaperInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <React.Fragment>
      <Stack sx={{justifyContent: 'center'}}>
        {bio != null ? <Typography variant='body1'>{bio}</Typography>:<Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iure doloribus adipisci, quisquam labore laudantium alias sapiente quasi voluptate.</Typography>}
      </Stack>
      <PaperInformation userState={userState}/>
      <LocationInformation userState={userState} />
    </React.Fragment>
  )
}

export default Description