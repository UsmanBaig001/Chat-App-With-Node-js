import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getUsers} from '../../redux/slices/usersSlice';
import {ItemProps} from '../../types/Types';

const UseSearch = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useAppDispatch();
  const Users = useAppSelector(state => state.users.Users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const filteredData: ItemProps[] = Users.filter(item =>
    item.displayName.toLowerCase().includes(searchText.toLowerCase()),
  )
    .map(user => ({
      photoUrl: user?.photoUrl || '',
      displayName: user.displayName,
      timeAgo: '',
      status: user?.status || '',
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));

  const handleSearch = (text: string) => {
    setSearchText(text);
  };
  return {handleSearch, searchText, filteredData, setSearchText};
};

export default UseSearch;
