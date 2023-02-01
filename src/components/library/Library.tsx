import React from 'react';
import {
  BackgroundImage,
  SimpleGrid,
  Box,
  Center,
  Button,
  Card,
  Image,
} from '@mantine/core';

const data = [
  {
    bg: 'https://img.zorores.com/_r/300x400/100/58/3b/583b42c8ef143a8b333f37a0ece6b0c2/583b42c8ef143a8b333f37a0ece6b0c2.jpg',
    label: 'Ayakashi Triangle',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/1f/e8/1fe81ea9ef1eb78be49fbacdde846327/1fe81ea9ef1eb78be49fbacdde846327.jpg',
    label: 'Trigun Stampede',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/55/fc/55fcef81a256771d6605d5aff5ef1938/55fcef81a256771d6605d5aff5ef1938.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/bd/6c/bd6cc124389350b4657397e6e15c02a4/bd6cc124389350b4657397e6e15c02a4.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/18/e8/18e8c10cad85b25123b49783c507fc2e/18e8c10cad85b25123b49783c507fc2e.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/f7/bc/f7bc283704a27a0663687220e4426777/f7bc283704a27a0663687220e4426777.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/68/17/6817b64d239ffcd95c5db40339bb4e20/6817b64d239ffcd95c5db40339bb4e20.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/8c/cc/8cccd0c253b338982bb873422f3b5f8a/8cccd0c253b338982bb873422f3b5f8a.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/d6/c4/d6c43ba4690c2756526fff813d547fbc/d6c43ba4690c2756526fff813d547fbc.png',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/70/57/7057a1c7fd06ba5dc3061c9bb33020cb/7057a1c7fd06ba5dc3061c9bb33020cb.jpg',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/1e/44/1e440156a7528d6a3935f5e6c4d1188d/1e440156a7528d6a3935f5e6c4d1188d.png',
    label: 'Initial D Fourth Stage',
  },
  {
    bg: 'https://img.zorores.com/_r/300x400/100/e1/b9/e1b9740f6863d2a21a83a73c682e30c7/e1b9740f6863d2a21a83a73c682e30c7.jpg',
    label: 'Initial D Fourth Stage',
  },
];

const Library: React.FC = () => {
  return (
    <SimpleGrid cols={6}>
      {data.map((lib: any, index: number) => (
        <Card key={index} shadow='sm' p='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={lib.bg} alt='bg' />
          </Card.Section>
          {/* <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
            {lib.label}
          </Button> */}
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Library;
