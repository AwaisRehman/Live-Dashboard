
import  React from 'react';
import PropTypes from 'prop-types';

import { Line} from 'rc-progress';


// @mui
import { Chip, Card,  Typography, Stack} from '@mui/material';

// utils

// components



// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

InitiativeCard.propTypes = {
  initiative: PropTypes.object,
};

export default function InitiativeCard({ initiative}) {
  const { initname, initheader, initpercentage } = initiative;



  if (initpercentage < 45)
  {
  return ( 
 
    <Card>
      <Stack spacing={2} sx={{ p: 4 }}>
     <Chip label={initheader} color="primary" />
     </Stack>
     <Stack spacing={2} sx={{ p: 4 }}>

     <Typography variant="h5" color={'red'} align='center' noWrap>
            {`${initpercentage}%`}
      </Typography>
     <Line percent={initpercentage} trailWidth={20} 
          strokeColor= {'red'} trailColor={'pink'} strokeWidth={19} strokeLinecap={'round'} />
          
 
     </Stack>
      <Stack  boxShadow={20} spacing={2} sx={{ p: 4 }}>
       
          <Typography variant="paragraph" noWrap>
            {initname}
          </Typography>
  
      </Stack>
    </Card>
   );
      }

if (initpercentage >= 75)
  {
  return ( 
 
    <Card>
      <Stack spacing={2} sx={{ p: 4 }}>
     <Chip label={initheader} color="primary" />
     </Stack>
     <Stack spacing={2} sx={{ p: 4 }}>
  
     <Typography variant="h5" color={'darkgreen'} align='center' noWrap>
            {`${initpercentage}%`}
      </Typography>
     <Line percent={initpercentage} trailWidth={20}   textColor={'white'}
          strokeColor= {'darkgreen'} trailColor={'lightgreen'} strokeWidth={19} strokeLinecap={'round'}  />
     
      </Stack>
      <Stack  boxShadow={20} spacing={2} sx={{ p: 4 }}>
       
          <Typography variant="paragraph" noWrap>
            {initname}
          </Typography>
  
      </Stack>
    </Card>
   );
      }

  if (initpercentage >= 45 && initpercentage < 75)
  {
  return ( 
 
    <Card>
      <Stack spacing={2} sx={{ p: 4 }}>
     <Chip label={initheader} color="primary" />
     </Stack>
     <Stack spacing={2} sx={{ p: 4 }}>
     <Typography variant="h5" color={'orange'} align='center' noWrap>
            {`${initpercentage}%`}
      </Typography>
     <Line percent={initpercentage} trailWidth={20}   textColor={'white'}
          strokeColor= {'orange'} trailColor={'gold'} strokeWidth={19} strokeLinecap={'round'}  />
      </Stack>
      <Stack  boxShadow={20} spacing={2} sx={{ p: 4 }}>
       
          <Typography variant="paragraph" noWrap>
            {initname}
          </Typography>
  
      </Stack>
    </Card>
   );
      }


}
