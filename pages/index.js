import Head from "next/head";
import Link from "next/link";
import VideoPlayer from "components/VideoPlayer";

export default function Home() {
  return (
    <main>
      <section>
        <VideoPlayer youtubeId={"msJx7hxfuQI"} />
      </section>
    </main>
  );
}
