import React from 'react';
import { styled } from '@shared/ui/theme';
import { InputNumberForm, Logo } from '../../molecules';
import { IconLabelSmall } from '../../atoms';
import { TouchableWithoutFeedback } from 'react-native';
import { useStore } from 'effector-react';
import { $currentError } from '@bll/models/errors/custom-errors';

type PropsStyle = {
  flagKeyboard: boolean;
};

const Wrapper = styled.View<PropsStyle>`
  height: ${props => (props.flagKeyboard ? '30%' : '50%')};
  margin-bottom: auto;
`;

const Top = styled.View<PropsStyle>`
  margin-top: ${({ theme, flagKeyboard }) =>
    flagKeyboard ? theme.spacing(4) : theme.spacing(10)}px;
  margin-bottom: auto;
`;

const InputWrapper = styled.View`
  margin-top: auto;
`;

type TProps = {
  onFocusNumber: () => void;
  valueNumber: string;
  flagKeyboard: boolean;
  dismissKeyboard: () => void;
  isLoading: boolean;
};

export const AuthPhoneInput = ({
  onFocusNumber,
  valueNumber,
  flagKeyboard,
  dismissKeyboard,
  isLoading,
}: TProps) => {
  let mask = '+{7} ({9}00) 000 00 00';
  const keyboard = false;
  const error = !!useStore($currentError).text;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flagKeyboard) dismissKeyboard();
      }}
    >
      <Wrapper flagKeyboard={flagKeyboard}>
        <Top flagKeyboard={flagKeyboard}>
          <Logo bigSize={flagKeyboard ? 'very-small' : 'small'} />
        </Top>

        <InputWrapper>
          <InputNumberForm
            left={<IconLabelSmall color={error ? '#FB6176' : ''} />}
            onFocusNumber={onFocusNumber}
            valueNumber={valueNumber}
            mask={mask}
            keyboard={keyboard}
            error={error}
            isLoading={isLoading}
          />
        </InputWrapper>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
