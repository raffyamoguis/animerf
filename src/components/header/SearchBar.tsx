import React from 'react';
import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Group align='center'>
        <TextInput
          sx={{ width: '400px' }}
          placeholder='Search'
          radius='xl'
          size='md'
          icon={<IconSearch size={18} />}
        />
      </Group>
    </div>
  );
};

export default SearchBar;
