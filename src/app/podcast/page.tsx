import YouTubeLatest from "@/components/youtube-latest";

export default function PodcastPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-[var(--color-tertiary)]">De UVA para todxs!</h1>
        <p className="mt-2 text-neutral-600">
          Píldoras diarias para Arquitectos, diseñadores y constructores, lo que nunca nos enseñaron
        </p>
        <p className="mt-1 text-neutral-600">
          Te invitamos a explorar contenido gratuito y de alto valor en nuestro podcast y canal: aprende, inspírate y comparte.
        </p>
        <div className="mt-8 grid gap-6">
          <div className="rounded-lg border border-neutral-200 p-4">
            <p className="text-sm text-neutral-500 mb-3">Spotify</p>
            <iframe
              title="Píldora UVA (Video del show)"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/show/0JGnY0rLz1CJHhQ4gYeRva/video?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div>
            <YouTubeLatest />
          </div>
        </div>
      </div>
    </section>
  );
}
