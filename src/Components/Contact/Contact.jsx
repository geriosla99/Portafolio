import React from 'react'
import { ButtonForm, ContainerContact, ContainerRRSS, ContentContact, RRSS, TitleContact } from './ContactStyles'
import { BsLinkedin } from "react-icons/bs";
import { SiMicrosoftoutlook } from "react-icons/si";
import { TbBrandGmail } from "react-icons/tb";
import { TfiGithub } from "react-icons/tfi";
import { FloatingLabel, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    emailjs.sendForm('service_th7ua7b', 'template_pgui4eh', event.target, '9K7Xgdblm_XoZ7Dsh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};

  return (
    <ContentContact>
      <TitleContact>Contacto</TitleContact>
      <ContainerContact>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3">
              <Form.Control type="text" id="nameContact" name="user_name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3">
              <Form.Control type="email" id="email" name="user_email" />
            </FloatingLabel>
          </Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
            <Form.Control
              name="message" 
              as="textarea"
              placeholder="Escribe tu mensaje aqui"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <ButtonForm type="submit" value="Enviar" />
        </Form>
        <ContainerRRSS>
          <RRSS>
            <a href="https://www.linkedin.com/in/geraldine-rios-506a271a7/">
              <BsLinkedin size={"2rem"} style={{ color: '#ffffff'}}/>
            </a>
          </RRSS>
          <RRSS>
            <a href="https://github.com/geriosla99">
              <TfiGithub size={"2rem"} style={{ color: '#ffffff'}}/>
            </a>
          </RRSS>
          <RRSS>
            <a href="mailto:geriosla@gmail.com">
              <TbBrandGmail size={"2rem"} style={{ color: '#ffffff'}}/>
            </a>
          </RRSS>
          <RRSS>
            <a href="mailto:geraldine.rios@hotmail.com">
              <SiMicrosoftoutlook size={"2rem"} style={{ color: '#ffffff'}}/>
            </a>
          </RRSS>
        </ContainerRRSS>
      </ContainerContact>
    </ContentContact>

  )
}

export default Contact