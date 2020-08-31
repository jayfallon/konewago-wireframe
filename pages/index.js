import Head from "next/head";
import Link from "next/link";
import VideoHero from "components/VideoHero";

export default function Home() {
  return (
    <main>
      <section>
        <VideoHero youtubeId={"msJx7hxfuQI"} />
      </section>
    </main>
  );
}
