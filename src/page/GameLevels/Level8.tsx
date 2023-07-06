import { styled } from "styled-components";
import Icon from "../../blocks/components/graphic/Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../util/state/Recoil";

const Level8 = () => {
  const background_color = [
    "#c4c403",
    "red",
    "purple",
    "#c4c403",
    "red",
    "purple",
    "#c4c403",
  ]; // colors
  const numberOFJoan = [1, 2, 3, 4, 5, 6, 7]; // increase the number of box

  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <Container>
      {background_color.map((e) => (
        <>
          <Circle value={e}></Circle>
        </>
      ))}
      <Wrapper value={count}>
        {numberOFJoan.map((e) => (
          <Icon key={e} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Level8;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const Wrapper = styled.div<{ value: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  ${(props) => props.value};
  /* flex-wrap: wrap; */
  position: absolute;
`;
const Circle = styled.div<{ value: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 7px;
  background-color: ${(props) => props.value};
`;
