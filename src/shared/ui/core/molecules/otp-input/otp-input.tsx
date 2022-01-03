import React, { useEffect } from 'react';
import { styled } from '@shared/ui/theme';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import { Typography } from '../../typography';

type StyleProps = {
  error: boolean;
};

const Wrapper = styled.View`
  height: 50%;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

const InputWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  flex-direction: row;
`;

const NumberWrapper = styled.View`
  background-color: #403a47;
  padding: ${({ theme }) => theme.spacing(2)}px 0;
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  border-radius: ${({ theme }) => theme.spacing(1.5)}px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const InputCustom = styled.TextInput<StyleProps>`
  font-family: ${({ theme }) => theme.typography['subtitle'].fontFamily};
  font-weight: 600;
  font-size: 20;
  line-height: 25;
  text-align: center;
  color: ${({ error }) => (error ? '#FB6176' : '#fff')};
`;

const Dash = styled.View`
  width: 10px;
  height: 2px;
  background-color: #fff;
  margin-right: ${({ theme }) => theme.spacing(1)}px
  margin-top: auto;
  margin-bottom: auto;
`;

type TProps = {
  symbol: string;
  checkData: (value: string) => void;
  error: [number, boolean];
};

export const OtpInput = ({ symbol, checkData, error }: TProps) => {
  const [values, setValues] = React.useState(Array(5).fill(''));
  const [activeRefs, setActiveRefs] = React.useState(0);

  const inputRefs: Array<TextInput | null> = [];

  useEffect(() => {
    setValues(prevState => {
      const newState = [...prevState];
      newState[activeRefs] = symbol;
      return newState;
    });
    if (symbol != ' ' && symbol != '') {
      if (activeRefs + 1 == Math.floor(values.length / 2)) {
        inputRefs[activeRefs + 2]?.focus();
      } else {
        inputRefs[activeRefs + 1]?.focus();
      }
    }
  }, [symbol]);

  useEffect(() => {
    if (
      activeRefs + 1 === values.length &&
      values.join('').replace(/\s/g, '').length == 4
    ) {
      console.log(values.join(''));
      checkData(values.join(''));
    }
  }, [values]);

  return (
    <Wrapper>
      <Typography
        variant="body15Regular"
        style={{
          textAlign: 'center',
        }}
      >
        {`На ваш номер отправлено ${'\n'} SMS с кодом подтверждения.`}
      </Typography>
      <InputWrapper>
        {values.map((n, i) => (
          <>
            {i == Math.floor(values.length / 2) ? (
              <Dash />
            ) : (
              <NumberWrapper>
                <InputCustom
                  showSoftInputOnFocus={false}
                  onFocus={() => setActiveRefs(i)}
                  keyboardType="numeric"
                  value={values[i]}
                  ref={input => (inputRefs[i] = input)}
                  editable={true}
                  maxLength={1}
                  error={error[1]}
                />
              </NumberWrapper>
            )}
          </>
        ))}
      </InputWrapper>
      {error[1] ? (
        <Typography variant="caption2" style={{ color: '#FE626A' }}>
          {`Неверный код. Осталось ${error[0]} попытки`}
        </Typography>
      ) : null}
    </Wrapper>
  );
};
