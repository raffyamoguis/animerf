import React, { useState } from 'react';
import {
  IconView360,
  IconHistory,
  IconActivity,
  IconBook,
  IconAssembly,
} from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconBook, label: 'Library' },
  {
    icon: IconView360,
    label: 'Browse',
  },
  { icon: IconHistory, label: 'History' },
  { icon: IconAssembly, label: 'Source' },
];

const NavLl: React.FC = () => {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      color='orange'
    />
  ));
  return <Box>{items}</Box>;
};

export default NavLl;
