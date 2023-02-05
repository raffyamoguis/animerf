import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  Paper,
  Title,
  Image,
  Text,
  Flex,
  Badge,
  Group,
  Box,
  Stack,
  ScrollArea,
} from '@mantine/core';
import Layout from '@/components/layout/Layout';

const animeInfoUri = `${process.env.API_HOST}/anime/gogoanime/info`;

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  const [animeInfo, setAnimeInfo] = useState<any>([]);

  useEffect(() => {
    async function fetchAnimeInfo() {
      let componentMounted = true;

      if (id !== null) {
        const info = await axios.get(`${animeInfoUri}/${id}`);
        if (componentMounted) {
          setAnimeInfo(info.data);
        }
      }
      return () => {
        componentMounted = false;
      };
    }
    fetchAnimeInfo();
  }, [id]);

  return (
    <Layout>
      <Paper shadow='xs' p='md'>
        <Title order={5} mb='md'>
          Anime Info
        </Title>
        <Flex gap='md'>
          <div>
            <Image
              radius='md'
              src={animeInfo.image}
              width={200}
              height={300}
              alt={animeInfo.title}
            />
          </div>
          <div>
            <Group mb='sm'>
              <Text fw={600}>{animeInfo.title}</Text>
              <Flex>
                {animeInfo.genres?.map((genre: string, index: number) => (
                  <Badge key={index} color='yellow'>
                    {genre}
                  </Badge>
                ))}
              </Flex>
            </Group>

            <Text>
              <b>Alternative Name:</b> {animeInfo.otherName}
            </Text>
            <Text>
              <b>Year:</b> {animeInfo.releaseDate}
            </Text>
            <Text>
              <b>Type:</b> {animeInfo.type}
            </Text>
            <Text>
              <b>Status:</b> {animeInfo.status}
            </Text>
            <Text>
              <b>Total Episodes:</b> {animeInfo.totalEpisodes}
            </Text>
            <Text lineClamp={4}>
              <b>Synopsis:</b> {animeInfo.description}
            </Text>
          </div>
        </Flex>

        {/* Episodes */}
        <Group position='left'>
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
                {animeInfo.episodes?.map((items: any) => (
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
                  >
                    <Text>Episode {items.number}</Text>
                  </Box>
                ))}
              </Stack>
            </ScrollArea>
          </div>
          <Text>Right Side</Text>
        </Group>
      </Paper>
    </Layout>
  );
}
