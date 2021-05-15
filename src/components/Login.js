import React from 'react'
import styled from "styled-components";
function Login() {
    return (
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp> GET ALL THREE</SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </Description>
          </CTA>
        </Content>
      </Container>
    );
}

export default Login

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:before {
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    
  }
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;