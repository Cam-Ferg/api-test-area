import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const SecondStep = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    fetch(`https://tweakplan.com/JavaScriptDemoSubmission-1.0/candidates/444837`, {
        method: 'patch',
        body:JSON.stringify({
            completed: true
        }),
      .then(response => response.json())
      .then(json => console.log(json))
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>etails</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your url and Secret"
            autoComplete="off"
            ref={register({
              required: 'Email and Secret is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>


        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default SecondStep;