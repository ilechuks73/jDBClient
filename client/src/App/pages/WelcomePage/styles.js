import { makeStyles as MuiMakeStyles } from "@material-ui/core";

export const useStyles = MuiMakeStyles((theme) => {
 return {
  container: {
   width: "100%",
   height: "100%",
   backgroundColor: "red",
  },
  inner: {
   height: "100%",
  },
 };
});
 