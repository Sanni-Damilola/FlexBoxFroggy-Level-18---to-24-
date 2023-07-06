import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Wrapper>
        {/* logo*/}
        <Logo>Learn Flex</Logo>

        {/* level display */}
        <Levels>Level 18</Levels>
      </Wrapper>
    </div>
  );
};

export default Header;

const Levels = styled.div`
  padding: 5px 20px;
  background-color: #ffffff58;
`;
const Logo = styled.h2`
  margin: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media not all and (min-width: 890px) {
    padding: 10px 0 10px 0;
    flex-direction: column;
    gap: 5px;
  }
`;
