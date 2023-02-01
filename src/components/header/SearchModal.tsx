import React, { useState, useEffect } from 'react';
import { Modal, Text, TextInput, Card, ScrollArea } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';

interface Props {
  open: boolean;
  setOpen: (o: boolean) => void;
}

const SearchModal: React.FC<Props> = ({ open, setOpen }) => {
  const [search, setSearch] = useState<string>('');
  const [animeData, setAnimeData] = useState<any>([]);

  useEffect(() => {
    fetchAnime();
  }, [search]);

  async function fetchAnime() {
    try {
      const result = await axios.get(
        `http://localhost:1111/anime/zoro/${search}`
      );
      setAnimeData(result.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Modal
      size='lg'
      opened={open}
      onClose={() => setOpen(false)}
      withCloseButton={false}
    >
      <TextInput
        variant='unstyled'
        placeholder='Search'
        radius='xl'
        size='md'
        icon={<IconSearch size={18} />}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* <Text mt='lg' ta='center'>
        No result try searching the japanese name.
      </Text> */}
      <ScrollArea style={{ height: 600 }}>
        {animeData?.map((items: any, index: number) => (
          <Card key={index}>
            <Text weight={500}>{items.title}</Text>
          </Card>
        ))}
      </ScrollArea>
    </Modal>
  );
};

export default SearchModal;
