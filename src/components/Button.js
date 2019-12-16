import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform:capitalize;
background:transparent;
font-size:1.3rem;
border:0;
margin:.7rem;
color:${props => props.cart ? 'var(--mainYellow)' : 'var(--mainProduct)'};

cursor:pointer;
&:focus {
    outline:none;
}
&:hover {
    color:var(--lightBlue);
    transition:all 0.5s ease-in-out;
}

`;
