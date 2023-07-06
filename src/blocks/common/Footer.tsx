import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Wrapper>
        Learn Flex is created by CodeLab
        <p> GitHub • Twitter • LinkedIN</p>
      </Wrapper>
    </div>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;

  p {
    margin: 0;
  }
`;
