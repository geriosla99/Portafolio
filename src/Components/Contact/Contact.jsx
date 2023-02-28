import React from 'react'
import { ContainerContact, ContentContact, RRSS, TitleContact } from './ContactStyles'
import { BsLinkedin } from "react-icons/bs";
import { SiMicrosoftoutlook } from "react-icons/si";
import { TbBrandGmail } from "react-icons/tb";
import { TfiGithub } from "react-icons/tfi";

const Contact = () => {
  return (
    <ContentContact>
      <TitleContact>Contacto</TitleContact>
      <ContainerContact>
        <RRSS>
          <a href="https://www.linkedin.com/in/geraldine-rios-506a271a7/">
            <BsLinkedin size={"2rem"} />
          </a>
        </RRSS>
        <RRSS>
          <a href="https://github.com/geriosla99">
            <TfiGithub size={"2rem"} />
          </a>
        </RRSS>
        <RRSS>
          <a href="mailto:geriosla@gmail.com">
            <TbBrandGmail size={"2rem"} />
          </a>
        </RRSS>
        <RRSS>
          <a href="mailto:geraldine.rios@hotmail.com">
            <SiMicrosoftoutlook size={"2rem"} />
          </a>
        </RRSS>
      </ContainerContact>
    </ContentContact>
  )
}

export default Contact