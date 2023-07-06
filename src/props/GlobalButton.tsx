import { selector, useRecoilValue } from "recoil";
import { styled, keyframes } from "styled-components";
import { IconState } from "../util/state/Recoil";

const GlobalButton = () => {
  const JustifyState = selector({
    key: "charCountState",
    get: ({ get }) => {
      const text = get(IconState);
      return text;
    },
  });

  const count = useRecoilValue(JustifyState).trim().replace(" ", "");

  const trueText = "justify-content: center";

  return (
    <div>
      {trueText === count ? (
        <Wrapper>Next</Wrapper>
      ) : (
        <Wrapper disabled style={{ cursor: "not-allowed" }}>
          Next
        </Wrapper>
      )}
    </div>
  );
};

export default GlobalButton;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.button`
  padding: 10px 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;

  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-iteration-count: infinite;
  /* background-color: red; */
  /* color: #fff; */
`;
