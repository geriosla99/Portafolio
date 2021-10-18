import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { ButtonForm, FormContent } from './ContactFormStyled'

const ContactForm = () => {
    return (
        <>          
            <h3>Contáctame</h3>
            <FormContent>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Nombre y apellido"
                    className="mb-3"
                >
                    <Form.Control type="name" placeholder="José Perez" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Escribe tu comentario aquí"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <ButtonForm>
                    Enviar
                </ButtonForm>
            </FormContent>             
        </>
    )
}

export default ContactForm
