import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthErrorPages } from '@shared/ui/core/pages';
import { TNavigationParamsList } from '../auth-stack';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'error'>;

export const AuthErrorConnector = ({ navigation }: TProps) => {
  const onPress = () => {
    navigation.goBack();
  };

  return <AuthErrorPages onPress={onPress} />;
};
