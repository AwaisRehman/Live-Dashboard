
import  React from 'react';
import PropTypes from 'prop-types';


import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// @mui
import { Chip, Card,  Typography, Stack } from '@mui/material';

// utils

// components



// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product}) {
  const { name, header, percentage } = product;



  if (percentage < 45)
  {
  return ( 
 
    <Card>
      <Stack spacing={2} sx={{ p: 4 }}>
     <Chip label={header} color="primary" />
     </Stack>
     <Stack spacing={1} sx={{ p: 1 }}>
     
     <CircularProgressbar 
        value={percentage} text={`${percentage}%`}
        styles={buildStyles({ 
          textColor: "red",
          pathColor: "red",
          trailColor: "pink",
        
        })}/>
      </Stack>
      <Stack  boxShadow={20} spacing={2} sx={{ p: 4 }}>
       
          <Typography variant="paragraph" noWrap>
            {name}
          </Typography>
  
      </Stack>
    </Card>
   );
      }

if (percentage >= 75)
  {
  return ( 
 
    <Card>
      <Stack spacing={2} sx={{ p: 4 }}>
     <Chip label={header} color="primary" />
     </Stack>
     <Stack spacing={1} sx={{ p: 1 }}>
     
     <CircularProgressbar 
        value={percentage} text={`${percentage}%`}
        styles={buildStyles({ 
          textColor: "green",
          pathColor: "green",
          trailColor: "lightgreen",
        
        })}/>
      </Stack>
      <Stack  boxShadow={20} spacing={2} sx={{ p: 4 }}>
   
          <Typography variant="paragraph" noWrap>
            {name}
          </Typography>
  
      </Stack>
    </Card>
   );
      }

  if (percentage >= 45 && percentage < 75)
  {
  return ( 
 
    <Card>
      <Stack spacing={2} sx={{ p: 4 }}>
     <Chip label={header} color="primary" />
     </Stack>
     <Stack spacing={1} sx={{ p: 1 }}>
     
     <CircularProgressbar 
        value={percentage} text={`${percentage}%`}
        styles={buildStyles({ 
          textColor: "orange",
          pathColor: "orange",
          trailColor: "gold ",
        
        })}/>
      </Stack>
      <Stack  boxShadow={20} spacing={2} sx={{ p: 4 }}>
 
          <Typography variant="paragraph" noWrap>
            {name}
          </Typography>
     
      </Stack>
    </Card>
   );
      }


}
