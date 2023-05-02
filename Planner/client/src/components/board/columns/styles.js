import { makeStyles } from '@material-ui/core/styles';
 
export default makeStyles((theme) => ({
    gridContainer: {
        margin: '8px',
        border: '1px solid lightgrey',
        borderRadius: '2px',
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
    },
    gridItem: {
      textAlign: 'center',
    },
  }));