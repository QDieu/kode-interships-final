import { setAuthUser } from '@bll/models/app-model/app-store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthEndPages } from '@shared/ui/core/pages';
import { TNavigationParamsList } from '../auth-stack';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'end'>;

export const AuthEndConnector = ({ navigation }: TProps) => {
  const checkData = () => {
    setAuthUser(true);
  };

  return <AuthEndPages checkData={checkData} />;
};
