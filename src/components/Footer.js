import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--base-border-color);
  padding: 0.3rem;

  @media all and (max-width: 480px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <small className="help-text">
        Shows vehicles within an radius of 400m. Move the map in order to fetch vehicles. 
      </small>
    </StyledFooter>
  );
};

export default Footer;
