import React, { useState } from 'react';
import Link from 'next/link';
import {
  Modal,
  Text,
  TextInput,
  Box,
  ScrollArea,
  Group,
  Avatar,
  HoverCard,
  Loader,
  Divider,
  Anchor,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Props {
  open: boolean;
  setOpen: (o: boolean) => void;
}

const searchUri = `${process.env.API_HOST}/anime/gogoanime/`;

const SearchModal: React.FC<Props> = ({ open, setOpen }) => {
  const [search, setSearch] = useState<string>('');

  const {
    isLoading,
    isError,
    error,
    data: searchData,
  } = useQuery(
    ['search', search],
    async ({ signal }) => await axios.get(`${searchUri}${search}`, { signal }),
    { enabled: Boolean(search) }
  );

  if (isError) {
    console.log(error);
  }

  function closeModal() {
    setSearch('');
    setOpen(false);
  }

  function trimTitle(title: string) {
    if (title.length > 45) return title.substring(0, 45) + '..';
    return title;
  }
  return (
    <Modal
      size='lg'
      opened={open}
      onClose={() => closeModal()}
      withCloseButton={false}
    >
      <TextInput
        variant='unstyled'
        placeholder='Search'
        radius='xl'
        size='md'
        icon={<IconSearch size={18} />}
        onChange={(e) => setSearch(e.target.value)}
        rightSection={isLoading ? <Loader size='xs' color='yellow' /> : null}
      />
      <Divider />

      {search === '' ? (
        <Text mt='lg' ta='center'>
          No result try searching the anime japanese alternative name.
        </Text>
      ) : (
        <ScrollArea style={{ height: 600 }}>
          {searchData?.data.results?.map((items: any, index: number) => (
            <Box
              key={index}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                textAlign: 'center',
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: 'pointer',

                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[5]
                      : theme.colors.gray[1],
                },
                marginTop: '5px',
              })}
            >
              <Group position='left' align='center'>
                <Avatar src={items.image} radius='xl' size={50} />
                <HoverCard>
                  <HoverCard.Target>
                    <Anchor
                      href={`/search/${items.id}`}
                      component={Link}
                      onClick={() => closeModal()}
                    >
                      <Text>{trimTitle(items.title)}</Text>
                    </Anchor>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size='sm'>{items.title}</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </Box>
          ))}
        </ScrollArea>
      )}
    </Modal>
  );
};

export default SearchModal;
