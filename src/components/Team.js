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
    width: calc(100% - 500px);
    height: 100%;
    overflow: auto;
    padding: 2rem 3rem;
  
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