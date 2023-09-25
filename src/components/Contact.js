import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (!formData[name]) {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    }
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.name.length <= 5) {
      tempErrors.name = 'Name must be more than 5 characters';
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'A valid email is required';
      isValid = false;
    }

    if (formData.message.length < 150) {
      tempErrors.message = 'Message must be at least 150 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
      setFormData({ name: '', email: '', message: '' });
      setMessageSent(true);
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="contact-header">Contact Me</h2>
            {messageSent && <div className="alert alert-success">Your message has been sent successfully!</div>}
            <Form onSubmit={handleSubmit}>
              {['name', 'email', 'message'].map((field, idx) => (
                <Form.Group key={idx}>
                  <Form.Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</Form.Label>
                  <Form.Control
                    type={field === 'message' ? 'textarea' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}  // onBlur event added here
                    className={errors[field] ? 'is-invalid' : ''}
                  />
                  {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                </Form.Group>
              ))}
              <Button type="submit">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
