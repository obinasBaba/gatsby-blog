import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField, Typography } from "@material-ui/core";


const Form = styled.form`
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
`

const SubmitBtn = styled( Button)`
  align-self: start;
  border-radius: 400px;
  font-size: 0.8rem;
  font-family: Sofia Pro Soft, sans-serif;
  font-weight: bold;
  text-transform: capitalize;
`

const StyledTextField = styled(TextField)`
  
`

const ContactForm = () => {

  const [email, setEmail] = useState( '' );

  const handleInputChange = (evt) => {
    setEmail(evt.target.value)
  }

  return (
    <Form>

      {/*<label htmlFor='input' >Email Address</label>*/}

      <StyledTextField id='input' label='Email Address'
                 type='email' variant='outlined'
                 value={email}
                 onChange={handleInputChange} />


      <SubmitBtn type='submit' variant="outlined"  >
        <Typography variant='subtitle2'>
          Subscribe
        </Typography>
      </SubmitBtn>

    </Form>
  );
};

export default ContactForm;
