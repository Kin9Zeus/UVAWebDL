const API_KEY = process.env.YOUTUBE_API_KEY;

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 60 }, cache: "force-cache" });
  if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
  return res.json() as Promise<T>;
}

type SearchItem = {
  id?: { channelId?: string; videoId?: string };
  snippet?: { title?: string; publishedAt?: string; channelId?: string };
};

type SearchResponse = { items?: SearchItem[] };

export async function getChannelIdByHandle(handle: string): Promise<string | null> {
  if (!API_KEY) return null;
  const q = encodeURIComponent(handle.replace(/^@/, ""));
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${q}&maxResults=1&key=${API_KEY}`;
  const data = await fetchJSON<SearchResponse>(url);
  const item = data.items?.[0];
  const channelId = item?.id?.channelId || item?.snippet?.channelId || null;
  return channelId;
}

export type YTVideo = { id: string; title: string; publishedAt: string };

export async function getLatestVideos(channelId: string, maxResults = 3): Promise<YTVideo[]> {
  if (!API_KEY) return [];
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=${maxResults}&type=video&key=${API_KEY}`;
  const data = await fetchJSON<SearchResponse>(url);
  const items = data.items ?? [];
  return items
    .map((it) => ({
      id: it.id?.videoId ?? "",
      title: it.snippet?.title ?? "",
      publishedAt: it.snippet?.publishedAt ?? "",
    }))
    .filter((v) => v.id);
}

export async function getLatestVideosByHandle(handle: string, maxResults = 3): Promise<YTVideo[]> {
  if (!API_KEY) return [];
  const channelId = await getChannelIdByHandle(handle);
  if (!channelId) return [];
  return getLatestVideos(channelId, maxResults);
}
