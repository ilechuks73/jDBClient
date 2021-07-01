import {useState} from "react";
import {
 Container as MuiContainer,
 Typography as MuiTypography,
 Grid as MuiGrid,
 Toolbar as MuiToolbar,
 makeStyles,
} from "@material-ui/core";

import { SignInForm, SignUpForm } from "../components";

const useStyles = makeStyles((theme) => {
 return {
  container: {
   width: "100%",
   height: "100%",
   backgroundColor: "white",
  },
  inner: {
   height: "100%",
  },
 };
});

function WelcomePage() {
  const [showSignUP, setShowSignUp] = useState(false)
 const classes = useStyles();
 return (
  <MuiContainer classes={{ root: classes.container }} maxWidth={false}>
   <MuiGrid sm={12}>
    <MuiToolbar>
     <MuiTypography>{"jDBC"}</MuiTypography>
    </MuiToolbar>
   </MuiGrid>
   <MuiGrid
    className={classes.inner}
    alignContent={"center"}
    container={true}
    direction={"row"}
   >
    <MuiGrid sm={6}>
     <MuiTypography> Web based Database Client </MuiTypography>
    </MuiGrid>
    <MuiGrid sm={6}>
     {showSignUP ?  <SignUpForm setShowSignUp={setShowSignUp} /> : <SignInForm setShowSignUp={setShowSignUp}/>}
    </MuiGrid>
   </MuiGrid>
  </MuiContainer>
 );
}

export default WelcomePage;
