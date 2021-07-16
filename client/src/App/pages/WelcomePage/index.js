import { useState } from "react";
import {
 Container as MuiContainer,
 Typography as MuiTypography,
 Grid as MuiGrid,
} from "@material-ui/core";

import { SignInForm, SignUpForm } from "../../components";

import { useStyles } from "./styles";

function WelcomePage() {
 const [showSignUP, setShowSignUp] = useState(false);
 const classes = useStyles();
 return (
  <MuiContainer classes={{ root: classes.container }} maxWidth={false}>
   <MuiGrid
    className={classes.inner}
    container={true}
    direction={"row"}
   >
    <MuiGrid sm={12}>
     <MuiTypography>{"jDBC"}</MuiTypography>
    </MuiGrid>
    <MuiGrid sm={6}>
     <MuiTypography>A simple Web based Database Client </MuiTypography>
    </MuiGrid>
    <MuiGrid sm={6}>
     {showSignUP ? (
      <SignUpForm setShowSignUp={setShowSignUp} />
     ) : (
      <SignInForm setShowSignUp={setShowSignUp} />
     )}
    </MuiGrid>
   </MuiGrid>
  </MuiContainer>
 );
}

export default WelcomePage;
