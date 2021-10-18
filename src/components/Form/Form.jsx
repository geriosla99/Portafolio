import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, FloatingLabel } from 'react-bootstrap'

const Form = () => {
    return (
        <>
            <Container>
                <Form>
                <FloatingLabel
                    controlId='floatingName'
                    label='Nombre'
                    className='mb-3'
                >
                    <Form.Control
                    type='email'
                    placeholder='Nombre'
                    name='name'
                    required
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingEmail'
                    label='Correo'
                    className='mb-3'
                >
                    <Form.Control
                    type='email'
                    placeholder='Correo'
                    name='email'
                    required
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingTextarea2'
                    label='Escribe tu mensaje'
                    className='mb-3'
                    name='message'
                >
                    <Form.Control
                    as='textarea'
                    placeholder='Escribe tu mensaje'
                    name='message'
                    style={{ height: '150px' }}
                    required
                    />
                </FloatingLabel>
                <div className='d-flex justify-content-center'>
                    <Button
                    className='px-5 mt-4'
                    size='lg'
                    variant='warning'
                    type='submit'
                    >
                    Enviar
                    </Button>
                </div>
                </Form>
            </Container>
        </>
    )
}

export default Form
