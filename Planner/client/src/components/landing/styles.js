import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    boxShadow: 'none',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(3),
  },
  subtitle: {
    marginTop: theme.spacing(3),
    color: 'black',
  },
  body: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));