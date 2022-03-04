import { Email, Telegram } from "@material-ui/icons";
import {
  AppBar,
  Grid,
  Typography,
} from "@mui/material";
import logo from "../../assets/premier-league.png";

export function DesctopHeader() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#aa80ff", top: 0 }}>
      <Grid container justifyContent="space-between">
        <img src={logo} style={{ width: "70px", marginLeft: "10%" }} />
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "10%",
            gap: "25px",
          }}
        >
          <Grid sx={{ display: "flex", alignItems: "center",gap: "5px" }}>
            <Telegram />
            <Typography>erbol_mkm@mail.ru</Typography>
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center",gap: "5px" }}>
            <Email />
            <Typography>erbol_mkm@mail.ru</Typography>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
