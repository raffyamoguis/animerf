import React from 'react';
import { Text, ScrollArea, Box, Stack } from '@mantine/core';
import axios from 'axios';

const watchAnimeUri = `${process.env.API_HOST}/anime/gogoanime/watch`;

interface Props {
  episodes: any;
  setSources: (sources: any) => void;
}
const EpisodeList: React.FC<Props> = ({ episodes, setSources }) => {
  const [active, setActive] = React.useState<number>(0);

  async function handleClick(id: string, index: number) {
    setActive(index);
    const result = await fetchAnimeStreamingLinks(`${watchAnimeUri}/${id}`);

    setSources(result.sources);
  }

  async function fetchAnimeStreamingLinks(api: string) {
    try {
      const streamingLinks = await axios.get(api);
      return streamingLinks.data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
  return (
    <div>
      <Text fw={600} mt='md'>
        Episode Lists
      </Text>
      <ScrollArea style={{ height: 450 }}>
        <Stack
          justify='flex-start'
          spacing={1}
          sx={(theme) => ({
            width: 200,
          })}
        >
          {episodes?.map((items: any, index: number) => (
            <Box
              key={items.id}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                textAlign: 'center',
                padding: theme.spacing.sm,
                borderRadius: theme.radius.sm,
                cursor: 'pointer',

                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[5]
                      : theme.colors.gray[1],
                },
                marginTop: '5px',
              })}
              onClick={() => handleClick(items.id, index)}
            >
              <Text color={`${index === active ? 'yellow' : null}`}>
                Episode {items.number}
              </Text>
            </Box>
          ))}
        </Stack>
      </ScrollArea>
    </div>
  );
};

export default EpisodeList;
