import React from 'react';
import { Paper, Title } from '@mantine/core';
import Layout from '@/components/layout/Layout';
export default function History() {
  return (
    <Layout>
      <Paper shadow='xs' p='md'>
        <Title order={5}>History Page</Title>
      </Paper>
    </Layout>
  );
}
