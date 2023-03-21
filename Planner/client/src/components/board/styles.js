import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
      flexDirection: 'row',
  },
  gridItem: {
    textAlign: 'center',
  },
  columns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
}));