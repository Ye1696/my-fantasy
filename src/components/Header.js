import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../assets/premier-league.png"


export function Header() {

    return <AppBar position="sticky" sx={{backgroundColor:"#aa80ff", top:0}}>
      <img src={logo} style={{width:"70px", marginLeft:"10%"}}/>
  </AppBar>
}