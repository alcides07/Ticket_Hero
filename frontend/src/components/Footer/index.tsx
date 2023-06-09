import { ContainerFooter } from "./styles";
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import logo from "../../assets/horizontal-logo.svg"

export default function Footer(){
    return (
        <>
            <hr style={{backgroundColor: "#000", width: "96%", margin: "auto"}}/>  
            <ContainerFooter>
                <ul>
                    <li> <GrFacebookOption size={"18"} className="icones"/> </li>
                    <li><GrInstagram size={"18"} className="icones"/></li>
                    <li> <GrLinkedinOption size={"18"} className="icones"/> </li>
                </ul>
                <p>
                    <img src = {logo}></img>
                    <span className="copy">&copy;</span>
                </p>
            </ContainerFooter>
        </>
    )
}