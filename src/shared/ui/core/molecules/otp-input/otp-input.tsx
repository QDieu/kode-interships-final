import React from 'react';
import { styled } from '@shared/ui/theme';
import { Text } from 'react-native';
import { Typography } from '../../typography';

type TStyleProps = {
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
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: row;
`;

const NumberWrapper = styled.View`
  background-color: #403a47;
  padding: ${({ theme }) => theme.spacing(0.5)}px 0;
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  border-radius: ${({ theme }) => theme.spacing(1.5)}px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const Dash = styled.View`
  width: 10px;
  height: 2px;
  background-color: #706D76;
  margin-right: ${({ theme }) => theme.spacing(1)}px
  margin-top: auto;
  margin-bottom: auto;
`;

const TextWrapper = styled.Text<TStyleProps>`
  font-size: 20px;
  line-height: 25px;
  color: ${({ error }) => (error ? '#FE626A' : '#fff')};
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`;

const DashLine = styled.View`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  width: 24px;
  border-radius: 16px;
  border: 1.5px solid #6c78e6;
`;

type TProps = {
  otp: string;
  error: [number, boolean];
};

export const OtpInput = ({ otp, error }: TProps) => {
  const [values, setValues] = React.useState(Array(5).fill(''));

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
                {i < Math.floor(values.length / 2) ? (
                  <TextWrapper error={error[1]}>{otp[i]}</TextWrapper>
                ) : (
                  <TextWrapper error={error[1]}>{otp[i - 1]}</TextWrapper>
                )}

                {/* Костыль для отображения черточки снизу */}
                {i == otp.length + +(i > Math.floor(values.length / 2)) ? (
                  <DashLine />
                ) : null}
              </NumberWrapper>
            )}
          </>
        ))}
      </InputWrapper>
      {error[1] ? (
        <Typography
          variant="caption2"
          style={{ color: '#FE626A', marginTop: 8 }}
        >
          {`Неверный код. Осталось ${error[0]} попытки`}
        </Typography>
      ) : null}
    </Wrapper>
  );
};
