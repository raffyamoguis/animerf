import { useState } from 'react';
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
  Select,
  Skeleton,
} from '@mantine/core';
import ReactPlayer from 'react-player';
import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import { AnimeInfoLoader } from '@/components/loader/SkeletonLoader';
import EpisodeList from '@/components/anime/EpisodeList';

const animeInfoUri = `${process.env.API_HOST}/anime/gogoanime/info`;

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  // const [animeInfo, setAnimeInfo] = useState<any>([]);
  const [sources, setSources] = useState<any>([]);

  const {
    isLoading,
    isError,
    error,
    data: animeInfo,
  } = useQuery(
    ['animeInfo', id],
    async () => (await axios.get(`${animeInfoUri}/${id}`)).data
  );

  console.log(animeInfo);

  if (isLoading) {
    return (
      <Layout>
        <AnimeInfoLoader />
      </Layout>
    );
  }

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
              src={animeInfo?.image}
              width={200}
              height={300}
              alt={animeInfo?.title}
            />
          </div>
          <div>
            <Skeleton visible={isLoading}>
              <Group mb='sm'>
                <Text fw={600}>{animeInfo?.title}</Text>

                <Flex>
                  {animeInfo?.genres.map((genre: string, index: number) => (
                    <Badge key={index} color='yellow'>
                      {genre}
                    </Badge>
                  ))}
                </Flex>
              </Group>
            </Skeleton>

            <Text>
              <b>Alternative Name:</b> {animeInfo?.otherName}
            </Text>
            <Text>
              <b>Year:</b> {animeInfo?.releaseDate}
            </Text>

            <Text>
              <b>Type:</b> {animeInfo?.type}
            </Text>
            <Text>
              <b>Status:</b> {animeInfo?.status}
            </Text>
            <Text>
              <b>Total Episodes:</b> {animeInfo?.totalEpisodes}
            </Text>
            <Text>
              <b>Synopsis:</b> {animeInfo?.description}
            </Text>
          </div>
        </Flex>

        {/* Episodes */}
        <Group position='left'>
          <EpisodeList episodes={animeInfo?.episodes} setSources={setSources} />
          {/* <ReactPlayer
            url='https://www.youtube.com/watch?v=DcxDegQkFIo'
            width={1200}
            height={400}
            playing
            controls
          /> */}
        </Group>
      </Paper>
    </Layout>
  );
}
