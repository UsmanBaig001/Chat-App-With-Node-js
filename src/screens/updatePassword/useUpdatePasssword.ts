import {NavigationProps} from '../../types/Types';

const useUpdatePasssword = ({navigation}: NavigationProps) => {
  const goBackCustom = () => {
    navigation.navigate('Settings');
  };
  return {goBackCustom};
};

export default useUpdatePasssword;
