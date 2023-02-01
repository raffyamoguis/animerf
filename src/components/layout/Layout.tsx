import { useState } from 'react';
import { AppShell, Navbar, Header, Text, useMantineTheme } from '@mantine/core';
import AppHeader from '../header/Header';
import AppNav from '../navlink/NavLl';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <AppNav />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p='md'>
          <AppHeader />
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;
