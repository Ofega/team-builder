import React from 'react';
import styled from 'styled-components';


const Team = props => {

    const { teamList } = props;
  
    return (
      <TeamContainer>
        {
          teamList.map(member => (
            <div key={member.id} className='member-card'>
              <p>Name: <span>{member.name}</span></p>
              <p>Email: <span>{member.email}</span></p>
              <p>Role: <span>{member.role}</span></p>
            </div>
          ))
        }
      </TeamContainer>
    );
}
  
  
const TeamContainer = styled.div `
    width: 100%;
    height: 100%;
    overflow: auto;
    max-width: calc(500px + 3rem);
    margin: 0 auto;
    padding: 3rem 1.5rem;

    @media (min-width: 1024px) {
        width: calc(100% - 500px);
        padding: 2rem 3rem;
        max-width: 100%;
    }
  
    .member-card {
      border: 1px solid #ddd;
      padding: 2rem 1.5rem;
      border-radius: 5px;
      font-size: 1.5rem;
      margin-bottom: 2rem;
  
      &:last-of-type {
        margin-bottom: 0;
      }
  
      p {
        margin-bottom: .5rem;
        font-weight: bold;
        text-transform: uppercase;
  
        &:last-of-type {
          margin-bottom: 0;
        }
  
        span {
          font-weight: normal;
          text-transform: initial;
          margin-left: 1rem;
        }
      }
    }
`

export default Team;