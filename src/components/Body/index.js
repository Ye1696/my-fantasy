import { useMediaQuery } from "@mui/material";
import { DesctopBody } from "./Desctop";
import { MobileBody } from "./Mobile";

export function Body() {
  const isSm = useMediaQuery("(max-width:732px)");

  console.log({isSm})

  return <>{isSm ? <MobileBody /> : <DesctopBody />}</>;
}
