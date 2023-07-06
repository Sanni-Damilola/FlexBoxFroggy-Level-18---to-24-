import styled from "styled-components";
import Icon from "./Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";

const Graphic = () => {
  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <div>
      <Wrapper text={count}>
        <Icon />
      </Wrapper>
    </div>
  );
};

export default Graphic;

const Wrapper = styled.div<{ text: string }>`
  background-color: #fff;
  height: 100%;
  padding: 20px;
  display: flex;
  ${(props) => props.text};

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
