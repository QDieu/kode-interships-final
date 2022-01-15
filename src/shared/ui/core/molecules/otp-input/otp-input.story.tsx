import { storiesOf } from '@storybook/react-native';
import { OtpInput } from '.';

storiesOf('ui/molecules', module).add('otp-input', () => {
  return <OtpInput otp={'123'} error={[1, true]} />;
});
