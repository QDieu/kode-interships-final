import { styled } from '@shared/ui/theme';
import React, { ReactNode } from 'react';
import { Icons } from '../../atoms/icons';
//@ts-ignore
import { IMaskTextInput } from 'react-native-imask';
import { ActivityIndicator } from 'react-native';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: #352f3d;
  /* margin-bottom: ${({ theme }) => theme.spacing(2)}px; */
`;

const WrapperInput = styled.View`
  padding: 14px 24px;
  background-color: #3b3542;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.spacing(3.25)}px;
  width: 100%;
`;

const CInput = styled.TextInput`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #706d76;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const WrapperTouch = styled.TouchableOpacity`
  margin-left: auto;
`;

type TProps = {
  left: ReactNode;
  onFocusNumber: () => void;
  onChangeTextNumber?: (value: string) => void;
  resetTextNumber?: () => void;
  valueNumber: string;
  mask?: string;
  keyboard?: boolean;
  error?: boolean;
  isLoading?: boolean;
};

export const InputNumberForm = ({
  left,
  onFocusNumber,
  onChangeTextNumber,
  resetTextNumber,
  valueNumber,
  mask,
  keyboard,
  error,
  isLoading,
}: TProps) => {
  return (
    <Wrapper>
      <WrapperInput>
        {left}
        {/* <CInput
          keyboardType="number-pad"
          maxLength={18}
          placeholder="Номер телефона"
          placeholderTextColor="#706D76"
          onFocus={onFocusNumber}
          onChangeText={value => onChangeTextNumber(value)}
          value={valueNumber}
        /> */}
        <IMaskTextInput
          keyboardType="number-pad"
          showSoftInputOnFocus={keyboard}
          placeholder="Номер телефона"
          placeholderTextColor={error ? '#FB6176' : '#706D76'}
          onFocus={() => onFocusNumber()}
          mask={mask}
          editable={true}
          value={valueNumber}
          onAccept={(value: string) => {
            if (onChangeTextNumber != undefined) onChangeTextNumber(value);
          }}
          style={{
            fontSize: 15,
            lineHeight: 20,
            color: error ? '#FB6176' : '#706D76',
            marginLeft: 16,
          }}
        />
        {valueNumber ? (
          <WrapperTouch onPress={resetTextNumber}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#6C78E6" />
            ) : (
              <Icons.Cancel />
            )}
          </WrapperTouch>
        ) : null}
      </WrapperInput>
    </Wrapper>
  );
};
