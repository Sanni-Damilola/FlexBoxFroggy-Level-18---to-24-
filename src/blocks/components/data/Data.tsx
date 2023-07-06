import styled from "styled-components";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Game from "../../../page/GameLevels/Game";

const Data = () => {
  return (
    <div>
      <Wrapper>
        <Main>
          {/* Header comp */}
          <Header />

          {/* children / levels */}
          <Game />

          {/* footer comp */}
          <Footer />
        </Main>
      </Wrapper>
    </div>
  );
};

export default Data;

const Wrapper = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 22.4% 21.7%,
    orange 0%,
    darkorange 100.2%
  );
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Main = styled.div`
  width: 90%;
  height: 97%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
