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
  onPressKey?: () => void;
};

export const KeyTimer = ({ text, onPressKey }: TProps) => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(59);
  const [done, setDone] = useState(false);
  const foo = useRef<number>();

  useEffect(() => {
    function tick() {
      setSeconds(prevSeconds => prevSeconds - 1);
    }
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
      if (onPressKey !== undefined) onPressKey();
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
