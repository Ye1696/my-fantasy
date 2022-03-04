import {
  useMediaQuery,
} from "@mui/material";
import { DesctopHeader } from "./DesctopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  const isSm = useMediaQuery("(max-width:732px)");
  return (
    <>
    {isSm ? <MobileHeader/> : <DesctopHeader/>}
    </>
  );
}
