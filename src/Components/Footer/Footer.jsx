import { Link } from "react-router-dom"
import { FooterContainer, LogoImg, Ulfooter, Lifooter} from "./FooterStyles"

import {FaFacebook,FaGit,FaInstagram} from 'react-icons/fa'

const Footer = () => {

  

  return (
    <FooterContainer>
     <Ulfooter>
    <Lifooter>

    <FaFacebook size={'22px'} cursor={'pointer'}/>
    <FaGit size={'22px'} cursor={'pointer'}/>
    <FaInstagram size={'22px'} cursor={'pointer'}/>

    </Lifooter>
     </Ulfooter>
    </FooterContainer>
  )
}
export default Footer