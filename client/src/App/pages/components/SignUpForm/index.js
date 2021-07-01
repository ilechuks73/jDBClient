import React from "react";
import {
 Button as MuiButton,
 Container as MuiContainer,
 TextField as MuiTextField,
 Typography as MuiTypography,
 Card as MuiCard,
 Grid as MuiGrid,
 makeStyles as MuiMakeStyles,
} from "@material-ui/core";

const useStyles = MuiMakeStyles((theme) => {
 return {
  container: {
   width: "max-content",
  },
  l1: {
   padding: theme.spacing(5, 3, 5, 3),
  },
 };
});

function SignUpForm({setShowSignUp}) {
 const classes = useStyles();
 return (
  <MuiContainer className={classes.container}>
   <MuiCard elevation={10} className={classes.l1}>
    <MuiTypography variant={"h4"}>{"Sign Up"}</MuiTypography>
    <MuiGrid container={true} direction={"column"} spacing={2}>
     <MuiGrid item>
      <MuiTextField
       name={"fullname"}
       placeholder="Enter Fullname"
       variant={"standard"}
      />
     </MuiGrid>
     <MuiGrid item>
      <MuiTextField
       name={"Email"}
       placeholder="Enter Email"
       variant={"standard"}
      />
     </MuiGrid>
     <MuiGrid item>
      <MuiButton color={"primary"} variant={"contained"}>
       {"Sign In"}
      </MuiButton>
     </MuiGrid>
    </MuiGrid>
    <MuiTypography>
     {`Already have an account yet?`}
     <MuiTypography
      variant={"p"}
      onClick={() => {
       setShowSignUp(false);
      }}
     >
      {" Sign In"}
     </MuiTypography>
    </MuiTypography>
   </MuiCard>
  </MuiContainer>
 );
}

export default SignUpForm;
