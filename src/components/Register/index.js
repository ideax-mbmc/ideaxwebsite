import React from 'react'
import {Container,
        Icon,
        FormContent,
        Form,
        FormH1,
        FormButton,
        Text, 
        FormInput, 
        FormLabel, 
        FormWrap } from './RegisterElements'

const Register = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to="/">IdeaX</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Register for IdeaX</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='text' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Register</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Register
