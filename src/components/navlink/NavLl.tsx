import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  IconView360,
  IconHistory,
  IconBook,
  IconAssembly,
} from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconBook, label: 'Library', src: '/' },
  {
    icon: IconView360,
    label: 'Browse',
    src: '/browse',
  },
  { icon: IconHistory, label: 'History', src: '/history' },
  { icon: IconAssembly, label: 'Source', src: '/source' },
];

const NavLl: React.FC = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      href={item.src}
      component={Link}
      active={router.pathname === item.src}
      label={item.label}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      color='orange'
    />
  ));
  return <Box>{items}</Box>;
};

export default NavLl;
