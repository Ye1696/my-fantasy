import { Grid } from "@mui/material";
import { GoodPlayer } from "./components/GoodPlayer";
import { News } from "./components/News";
import { Results } from "./components/Results";

export function DesctopBody(){

    return<Grid container sx={{display:"flex", justifyContent:"center", marginTop:"5px", gap:"10px"}}>
        <Grid item xs={2}>
            <GoodPlayer/>
        </Grid>
        <Grid item xs={4}>
            <News/>
        </Grid>
        <Grid item xs={3}>
            <Results/>
        </Grid>
    </Grid>
}