import { getLatestVideos, getLatestVideosByHandle } from "@/lib/youtube";

export default async function YouTubeLatest({ handle = (process.env["YOUTUBE_CHANNEL_HANDLE"] as string) || "@uvarq", max = 4 }: { handle?: string; max?: number }) {
  const hasAPI = !!process.env["YOUTUBE_API_KEY"];
  const channelId = process.env["YOUTUBE_CHANNEL_ID"] as string | undefined;
  const FALLBACK_VIDEOS: { id: string; title: string }[] = [
    { id: "QuLbxdf6ty4", title: "¡Creando Empresa y También Concursando!" },
    { id: "p44hGFi7oGQ", title: "Diplomado en Gerencia de Proyectos, Costos y Honorarios" },
    { id: "JQiyOUV51wE", title: "Historia detrás de UVA" },
    { id: "OenzI24XI2M", title: "Aprende a vender siendo arquitecto" },
  ];
  let videos: { id: string; title: string }[] = [];
  if (hasAPI) {
    try {
      if (channelId) {
        videos = await getLatestVideos(channelId, max);
      } else {
        videos = await getLatestVideosByHandle(handle, max);
      }
    } catch {
      videos = [];
    }
  }

  const toRender = videos.length > 0 ? videos.slice(0, max) : FALLBACK_VIDEOS.slice(0, max);

  return (
    <div>
      <p className="text-sm text-neutral-500 mb-3">Últimos videos de YouTube</p>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {toRender.map((v) => (
          <div key={v.id} className="group h-full rounded-xl overflow-hidden border border-neutral-200 bg-white">
            <iframe
              className="aspect-video w-full transition-transform duration-300 group-hover:scale-[1.02]"
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
