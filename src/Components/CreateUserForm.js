// CreateUserForm.js
import React, { useState } from 'react';
import Joi from 'joi-browser';

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required().label('Username'),
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().min(6).required().label('Password'),
});

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = schema.validate(formData, { abortEarly: false });

    if (validationResult.error) {
      const errors = {};
      validationResult.error.details.forEach((detail) => {
        errors[detail.context.key] = detail.message;
      });
      setValidationErrors(errors);
      return;
    } else {
      setValidationErrors({});
    }

    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {validationErrors.username && (
          <div className="error">{validationErrors.username}</div>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {validationErrors.email && (
          <div className="error">{validationErrors.email}</div>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {validationErrors.password && (
          <div className="error">{validationErrors.password}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUserForm;
