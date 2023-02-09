import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import InitiativeCard from './InitiativeCard';

// ----------------------------------------------------------------------



InitiativeList.propTypes = {
  initiatives: PropTypes.array.isRequired,
};


export default function InitiativeList({ initiatives, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {initiatives.map((initiative) => (
        <Grid key={initiative.initid} item xs={12} sm={6} md={3}>
          <InitiativeCard initiative={initiative} />
        </Grid>
      ))}
    </Grid>
  );
}

