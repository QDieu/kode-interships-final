import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthEndPages } from '@shared/ui/core/pages';
import { TNavigationParamsList } from '../auth-stack';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'end'>;

export const AuthEndConnector = ({ navigation }: TProps) => {
  console.log('ya tut');
  return <AuthEndPages />;
};
