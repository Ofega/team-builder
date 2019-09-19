import React from 'react';
import styled from 'styled-components';


const Form = props => {

    const { teamForm, handleChange, handleSubmit } = props;
    const { name, email, role } = teamForm;

    return (
        <FormContainer>
        <form>
            <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleChange} id="name" value={name} required />
            </div>

            <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input type="email" onChange={handleChange} id="email" value={email} required />
            </div>

            <div className="input-container">
            <label htmlFor="role">Role</label>
            <input type="role" onChange={handleChange} id="role" value={role} required />
            </div>

            <button onClick={handleSubmit}>Submit Form</button>
        </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  background: #373635;

  form {
    min-height: auto;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    padding: 3rem 2rem;

    .input-container {
      margin-bottom: 2rem;
     
      label, input {
        display: block;
      }

      label {
        font-size: 1.5rem;
        color: #000;
        font-weight: 600;
        margin-bottom: .5rem;
      }

      input {
        width: 100%;
        border: 1px solid #ddd;
        outline: none;
        padding: .5rem 1rem;
        min-height: 45px;
        border-radius: 5px;
      }
    }

    button {
      border-radius: 5px;
      padding: 1rem
      border: none;
      color: white;
      min-width: 150px;
      min-height: 40px;
      font-size: 1.5rem;
      background: #373635;

      &:hover {
        opacity: .8;
      }
    }
  }
`

export default Form;