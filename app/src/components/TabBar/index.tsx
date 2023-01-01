import React from 'react';

import styled from 'styled-components/native';

import SearchIcon from '@/assets/search.svg';
import TodayIcon from '@/assets/today.svg';
import FavoriteIcon from '@/assets/favorite.svg';
import AccountIcon from '@/assets/account.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #36558c;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabBar = ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>

      <TabItem onPress={() => goTo('Appointments')}>
        <TodayIcon
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>

      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{ opacity: state.index === 2 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon
          style={{ opacity: state.index === 3 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>
    </TabArea>
  );
};

export default TabBar;
