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
  Center,
} from '@mantine/core';
import ReactPlayer from 'react-player';
import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import { AnimeInfoLoader } from '@/components/loader/SkeletonLoader';
import EpisodeList from '@/components/anime/EpisodeList';
import playerStyle from '../../styles/react-player.module.css';
import { isTemplateSpan } from 'typescript';

const animeInfoUri = `${process.env.API_HOST}/anime/gogoanime/info`;

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  const [sources, setSources] = useState<any>([]);
  const [selSource, setSelSource] = useState<string>(sources[0]?.url);

  console.log(selSource);

  const {
    isLoading,
    isError,
    error,
    data: animeInfo,
  } = useQuery(
    ['animeInfo', id],
    async () => (await axios.get(`${animeInfoUri}/${id}`)).data
  );

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
            <Text lineClamp={4}>
              <b>Synopsis:</b> {animeInfo?.description}
            </Text>
          </div>
        </Flex>

        {/* Episodes */}
        <Group>
          <EpisodeList episodes={animeInfo?.episodes} setSources={setSources} />
          <ReactPlayer
            className={playerStyle.reactPlayer}
            url={selSource}
            width='50%'
            controls
          />
          <div>
            <Select
              placeholder='Choose quality'
              data={sources?.map((items: any, index: number) => ({
                value: items.url,
                label: items.quality,
              }))}
              value={selSource}
              onChange={(e) => setSelSource(e)}
            />
          </div>
        </Group>
      </Paper>
    </Layout>
  );
}
