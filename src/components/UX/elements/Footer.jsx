import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: #333;
  padding: 1rem;
  background: linear-gradient(to left,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); 
  text-align: right;
`;

export function Footer() {
  return <FooterStyle>Template: R3F-Basic</FooterStyle>;
}

