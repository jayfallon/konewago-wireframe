import VideoPlayer from "./VideoPlayer";
import styled from "styled-components";

const VideoHeroStyles = styled.section``;

export default function VideoHero({ youtubeId }) {
  return (
    <VideoHeroStyles>
      <VideoPlayer youtubeId={youtubeId} />
    </VideoHeroStyles>
  );
}
