import styled from "styled-components";
import Graphic from "../../blocks/components/graphic/Graphic";
import Data from "../../blocks/components/data/Data";
import Leve19 from "../GameLevels/Level19";
import Leve20 from "../GameLevels/Level20";
import Leve21 from "../GameLevels/Level21";
import Leve22 from "../GameLevels/Level22";
import Leve23 from "../GameLevels/Level23";
import Leve24 from "../GameLevels/Level24";
import Level8 from "../GameLevels/Level18";

const Main = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data />
        {/* container with game */}
        {/* <Graphic /> */}
        {/* <Level8 /> */}
        {/* <Leve19 /> */}
        {/* <Leve20 /> */}
        {/* <Leve21 /> */}
        {/* <Leve22 /> */}
        {/* <Leve23 /> */}
        <Leve24 />
      </Wrapper>
    </div>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media not all and (min-width: 890px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
    height: 100%;
  }
`;
