import { styled } from '@shared/ui/theme';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { AlertView } from '../../atoms';

//@ts-ignore
import SnackBar from 'rn-snackbar-component';

const Wrapper = styled.View`
  background-color: #312c39;
  height: 100%;
`;

export type TPayformTemplate = {
  cardInfo: React.ReactNode;
  inputNumberForm: React.ReactNode;
  inputSumContainer: React.ReactNode;
  button: React.ReactNode;
};

export const PayformTemplate = ({
  cardInfo,
  inputNumberForm,
  inputSumContainer,
  button,
}: TPayformTemplate) => {
  return (
    <KeyboardAvoidingView
      behavior={'position'}
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={64}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          {cardInfo}
          {inputNumberForm}
          {inputSumContainer}
          {button}
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
