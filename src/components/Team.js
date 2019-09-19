import React from 'react';
import styled from 'styled-components';


const Team = props => {

    const { teamList, handleClick } = props;
  
    return (
      <TeamContainer>
        {
          teamList.map(member => (
            <div key={member.id} className='member-card'>
              <p>Name: <span>{member.name}</span></p>
              <p>Email: <span>{member.email}</span></p>
              <p>Role: <span>{member.role}</span></p>

              <button onClick={() => handleClick(member.id)}>Edit Member</button>
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
    padding: 3rem 1.5rem;

    @media (min-width: 1024px) {
        width: calc(100% - 500px);
        padding: 2rem 3rem;
    }
  
    .member-card {
        border: 1px solid #ddd;
        padding: 2rem 1.5rem;
        border-radius: 5px;
        font-size: 1.5rem;
        margin: 0 auto 2rem;
        max-width: 500px;
  
        &:last-of-type {
            margin-bottom: 0;
        }

        @media (min-width: 1024px) {
            max-width: 100%;
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

        button {
            margin-top: 3rem;
            border-radius: 5px;
            padding: 1rem
            border: none;
            color: white;
            min-width: 120px;
            min-height: 35px;
            font-size: 1.4rem;
            background: #373635;
      
            &:hover {
              opacity: .8;
            }
        }
    }
`

export default Team;