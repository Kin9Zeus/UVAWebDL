import { getLatestVideosByHandle } from "@/lib/youtube";

export default async function YouTubeLatest({ handle = process.env.YOUTUBE_CHANNEL_HANDLE || "@uvarq", max = 4 }: { handle?: string; max?: number }) {
  const hasAPI = !!process.env.YOUTUBE_API_KEY;
  let videos: { id: string; title: string }[] = [];
  if (hasAPI) {
    try {
      videos = await getLatestVideosByHandle(handle, max);
    } catch (e) {
      videos = [];
    }
  }

  if (!hasAPI || videos.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 p-4">
        <p className="text-sm text-neutral-500 mb-3">Últimos videos de YouTube</p>
        <p className="text-sm text-neutral-600">Conecta YOUTUBE_API_KEY para mostrar automáticamente los últimos videos.</p>
        <a href="https://youtube.com/@uvarq?si=DK8V8qn2uPUYFZpQ" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[var(--color-secondary)]">Ir al canal de UVA</a>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-neutral-500 mb-3">Últimos videos de YouTube</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {videos.slice(0, max).map((v) => (
          <div key={v.id} className="group rounded-xl overflow-hidden border border-neutral-200 bg-white">
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