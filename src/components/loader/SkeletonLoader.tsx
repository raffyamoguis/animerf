import React from 'react';
import { Paper, Skeleton, Flex } from '@mantine/core';

export const AnimeInfoLoader: React.FC = () => {
  return (
    <Paper shadow='xs' p='md'>
      <Skeleton height={8} width='10%' />
      <Flex gap='md'>
        <Skeleton height={300} width='12%' mt='md' />

        <div style={{ width: '100%' }}>
          <Skeleton height={10} width={400} mt='md' />
          <Skeleton height={10} width={410} mt='md' />
          <Skeleton height={10} width={100} mt='sm' />
          <Skeleton height={10} width={120} mt='sm' />
          <Skeleton height={10} width={140} mt='sm' />
          <Skeleton height={10} width={100} mt='sm' />
          <Skeleton height={10} mt='xs' />
          <Skeleton height={10} mt='xs' />
          <Skeleton height={10} mt='xs' />
          <Skeleton height={10} mt='xs' />
          <Skeleton height={10} mt='xs' />
          <Skeleton height={10} width={300} mt='xs' />
        </div>
      </Flex>

      <Skeleton height={8} width='10%' mt='lg' />

      <Skeleton height={8} width='15%' mt='lg' />
      <Skeleton height={20} width='15%' mt='xs' />
    </Paper>
  );
};
