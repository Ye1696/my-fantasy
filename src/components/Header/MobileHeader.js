import { Email, Telegram } from "@material-ui/icons";
import { AppBar, Grid, IconButton } from "@mui/material";
import logo from "../../assets/premier-league.png";

export function MobileHeader() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#aa80ff", top: 0 }}>
      <Grid container justifyContent="space-between">
        <img src={logo} style={{ width: "70px", marginLeft: "5%" }} />
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "5%",
            gap: "25px",
          }}
        >
          <IconButton>
            <Telegram />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}
