import React, { useState } from 'react';
import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import SearchModal from './SearchModal';

const SearchBar = () => {
  const [opened, setOpened] = useState<boolean>(false);

  //   useEffect(() => {
  //     fetchAnime();
  //   }, [search]);

  //   async function fetchAnime() {
  //     try {
  //       const result = await axios.get(
  //         `http://localhost:1111/anime/zoro/${search}`
  //       );
  //       setAnimeData(result.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SearchModal open={opened} setOpen={setOpened} />
      <Group align='center'>
        <TextInput
          sx={{ width: '400px' }}
          placeholder='Search'
          radius='xl'
          size='md'
          icon={<IconSearch size={18} />}
          onClick={() => setOpened(true)}
        />
      </Group>
    </div>
  );
};

export default SearchBar;
