import { Paper, Text, Title, Tabs } from '@mantine/core';
import Layout from '@/components/layout/Layout';
import Library from '@/components/library/Library';
import { IconFolder } from '@tabler/icons-react';

export default function Home() {
  return (
    <Layout>
      <Paper shadow='xs' p='md'>
        <Title order={5}>Library</Title>

        <Tabs color='yellow' defaultValue='gallery'>
          <Tabs.List position='right'>
            <Tabs.Tab value='gallery' icon={<IconFolder size={14} />}>
              Default
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='gallery' pt='xs'>
            <Library />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Layout>
  );
}
