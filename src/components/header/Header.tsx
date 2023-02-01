import React from 'react';
import { Group } from '@mantine/core';
import AppName from './AppName';
import SearchBar from './SearchBar';
import Menu from './Menu';

const Header = () => {
  return (
    <Group position='apart' sx={{ height: '100%' }}>
      <AppName />
      <SearchBar />
      <Menu />
    </Group>
  );
};

export default Header;
