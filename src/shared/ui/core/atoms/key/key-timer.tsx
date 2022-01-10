import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '../../typography';
import { styled } from '../../../theme';

const Wrapper = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing(1.75)}px 0;
  flex: 33.3%;
  justify-content: center;
  align-items: center;
`;

type TProps = {
  text: string;
  children?: React.ReactNode;
  repeatRequest: () => void;
};

export const KeyTimer = ({ text, repeatRequest }: TProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [done, setDone] = useState(false);
  const foo = useRef<number>();

  function tick() {
    setSeconds(prevSeconds => prevSeconds - 1);
  }

  useEffect(() => {
    foo.current = window.setInterval(() => tick(), 1000);
    return () => {
      clearInterval(foo.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0 && minutes !== 0) {
      setMinutes(prevState => prevState - 1);
      setSeconds(59);
    } else if (seconds === 0 && minutes === 0) {
      text = 'Выслать код повторно';
      clearInterval(foo.current);
      setDone(true);
    }
  }, [minutes, seconds]);

  if (text == 'Again') {
    text = `Повторить через ${minutes}:${seconds}`;
  }

  const onPress = () => {
    if (done) {
      repeatRequest();
      setDone(false);
      setMinutes(2);
      setSeconds(59);
      foo.current = window.setInterval(() => tick(), 1000);
    }
  };

  return (
    <>
      <Wrapper activeOpacity={0.5} disabled={!done} onPress={() => onPress()}>
        <Typography
          variant="caption1"
          style={{
            textAlign: 'center',
            color: done ? '#fff' : '#C2C1C6',
          }}
        >
          {done ? 'Выслать код повторно' : text}
        </Typography>
      </Wrapper>
    </>
  );
};
