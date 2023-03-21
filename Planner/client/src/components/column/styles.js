import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
      backgroundColor: "#f4f5f7",
      borderRadius: "2.5px",
      width: "300px",
      height: "475px",
      overflowY: "scroll",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      border: "1px solid gray",
  },
  tasklist: {
    padding: "3px",
    transition: "background-color 0.25s ease",
    backgroundColor: "#f4f5f7",
    flexGrow: "1",
    minHeight: "100px",
  },
}));