import React from 'react';
import { Title, Paper } from '@mantine/core';
import Layout from '@/components/layout/Layout';
export default function Browse() {
  return (
    <Layout>
      <Paper shadow='xs' p='md'>
        <Title order={5}>Browse Page</Title>
      </Paper>
    </Layout>
  );
}
