import { styled } from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../util/state/Recoil";

const Leve24 = () => {
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
      <Wrapper value={count}>
        {numberOFJoan.map((e) => (
          <Wrap key={e}>
            <Box>s</Box>
          </Wrap>
        ))}
      </Wrapper>
      <Column>
        {numberOFJoan.map((e) => (
          <Icon key={e}></Icon>
        ))}
      </Column>
    </Container>
  );
};

export default Leve24;

const Box = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 18%;
  height: 18%;
  margin: 3px;
  background-color: red;
`;

const Wrap = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18%;
  margin: 3px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Wrapper = styled.div<{ value: string }>`
  width: 91%;
  height: 100%;
  display: flex;

  padding: 2em;
  position: absolute;
  z-index: 999;

  ${(props) => props.value};
`;
const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap-reverse;
  align-content: space-between;
  justify-content: center;
  padding: 2em;
`;
