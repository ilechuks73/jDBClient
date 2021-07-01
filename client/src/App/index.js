import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WelcomePage, ConnectPage } from "./pages";
import {makeStyles, Container as MuiContainer} from '@material-ui/core'

const useStyles = makeStyles((theme)=>{
  return{
    container: {
      position: "absolute",
      backgroundColor: 'black',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  }
})

function App() {
  const className = useStyles()
 return (
   <MuiContainer maxWidth={false} disableGutters={true} className={className.container}>
     <BrowserRouter>
   <Switch>
    <Route path="/welcome">
     <WelcomePage />
    </Route>
    <Route path="/connect">
     <ConnectPage />
    </Route>
    <div>
     <h1>the app</h1>
    </div>
   </Switch>
  </BrowserRouter>
   </MuiContainer>
  
 );
}

export default App;
