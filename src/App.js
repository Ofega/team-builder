import React, { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';
import styled from 'styled-components';
import uuid from 'uuid';

const App = () => {

  // Default State :)
  const initialFormState = { name: '', email: '', role: ''};
  const initialTeamState = [
    { id: uuid(), name: 'Jessica', email: 'fegaeze@gmail.com', role: 'Frontend Engineer' },
    { id: uuid(), name: 'Jessica', email: 'fegaeze@gmail.com', role: 'Frontend Engineer' }
  ];


  // Set State for App :)
  const [ teamForm, setTeamForm ] = useState(initialFormState);
  const [ teamList, setTeamList ] = useState(initialTeamState);


  //Handler Functions
  const handleChange = e => {
    setTeamForm({
      ...teamForm,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, role } = teamForm;

    if(name && email && role) {
      const submittedValues = [{
        id: uuid(),
        name: name,
        email: email,
        role: role
      }]
  
      const newTeamList = submittedValues.concat(teamList);
      setTeamList(newTeamList);
      setTeamForm(initialFormState);
    }
  }

  return (
    <AppContainer>
      <Form teamForm={teamForm} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Team teamList={teamList} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export default App;
