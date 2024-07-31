import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {SearchStyles} from './SearchStyles';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {iconRemove, iconSearchBlack} from '../../assets/images/Images';
import UseSearch from './useSearch';
import {ItemProps} from '../../types/Types';
import {MesssageStyles} from '../messages/MessageStyles';
import {COLORS} from '../../constants/colors';

const Search = () => {
  const {handleSearch, searchText, filteredData, setSearchText} = UseSearch();

  const renderItem = ({item}: {item: ItemProps}) => (
    <View style={MesssageStyles.item}>
      {item.photoUrl ? (
        <Image source={{uri: item.photoUrl}} style={MesssageStyles.image} />
      ) : (
        <Image
          source={{uri: `https://via.placeholder.com/52x52`}}
          style={MesssageStyles.image}
        />
      )}
      <View style={MesssageStyles.textContainer}>
        <View style={MesssageStyles.timeContainer}>
          <Text style={MesssageStyles.name}>{item.displayName}</Text>
          <Text style={MesssageStyles.timeAgo}>{item.timeAgo}</Text>
        </View>
        <Text style={MesssageStyles.description}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={SearchStyles.parentContainer}>
        <View style={SearchStyles.searchContainer}>
          <Image source={iconSearchBlack} style={SearchStyles.searchIcon} />
          <TextInput
            style={SearchStyles.textInput}
            placeholder="find new people"
            onChangeText={handleSearch}
            value={searchText}
          />
          {!searchText ? (
            ''
          ) : (
            <Pressable onPress={() => setSearchText('')}>
              <Image source={iconRemove} style={SearchStyles.iconRemove} />
            </Pressable>
          )}
          <Text style={SearchStyles.searchHeading}>People</Text>
        </View>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Search;
