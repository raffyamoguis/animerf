import React from 'react';
import { Group, ActionIcon, Title } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';

const AppName: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Group align='center'>
        <ActionIcon size='xl' radius='xl'>
          <IconMenu2 size={26} />
        </ActionIcon>
        <Title order={3} color='yellow'>
          AnimeRf
        </Title>
      </Group>
    </div>
  );
};

export default AppName;
