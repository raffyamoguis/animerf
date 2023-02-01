import { Paper, Text } from '@mantine/core';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Paper shadow='xs' p='md'>
        <Text>Hello World</Text>
      </Paper>
    </Layout>
  );
}
