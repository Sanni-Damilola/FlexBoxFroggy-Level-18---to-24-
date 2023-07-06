import Definition from "./Definition";
import Example from "./Example";
import Title from "./Title";
import styled from "styled-components";

const Instruction = () => {
  return (
    <div>
      <Wrapper>
        {/* title area */}
        <Title />

        {/* definitions section */}
        <Definition />

        {/* example section */}
        <Example />
      </Wrapper>
    </div>
  );
};

export default Instruction;

const Wrapper = styled.div`
  @media not all and (min-width: 890px) {
    margin-top: 50px;
  }
`;
