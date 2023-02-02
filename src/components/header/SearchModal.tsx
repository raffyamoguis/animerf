import React, { useState, useEffect } from 'react';
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
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';

interface Props {
  open: boolean;
  setOpen: (o: boolean) => void;
}

const SearchModal: React.FC<Props> = ({ open, setOpen }) => {
  const [search, setSearch] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [animeData, setAnimeData] = useState<any>([]);

  useEffect(() => {
    fetchAnime();
    if (search === '') setAnimeData([]);
  }, [search]);

  async function fetchAnime() {
    try {
      setLoader(true);
      const result = await axios.get(
        `http://localhost:1111/anime/zoro/${search}`
      );
      setAnimeData(result.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  function closeModal() {
    setAnimeData([]);
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
        rightSection={loader ? <Loader size='xs' color='yellow' /> : null}
      />

      {search === '' ? (
        <Text mt='lg' ta='center'>
          No result try searching the anime japanese alternative name.
        </Text>
      ) : (
        <ScrollArea style={{ height: 600 }}>
          {animeData?.map((items: any, index: number) => (
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
                    <Text>{trimTitle(items.title)}</Text>
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
