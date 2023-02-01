import React from 'react';
import { Paper, Title } from '@mantine/core';
import Layout from '@/components/layout/Layout';
export default function Source() {
  return (
    <Layout>
      <Paper shadow='xs' p='md'>
        <Title order={5}>Source Page</Title>
      </Paper>
    </Layout>
  );
}
