import React from 'react';
import {
  MediaQuery,
  Burger,
  Text,
  Group,
  ActionIcon,
  Title,
} from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';

const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Group position='apart'>
        <Group>
          <ActionIcon size='xl' radius='xl'>
            <IconMenu2 size={26} />
          </ActionIcon>
          <Title order={3} color='yellow'>
            AnimeRf
          </Title>
        </Group>
      </Group>
    </div>
  );
};

export default Header;
