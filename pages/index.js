import Head from "next/head";
import Link from "next/link";
import VideoHero from "components/VideoHero";
import Columns12 from "components/Columns12";
import { Colors } from "components/Theme";

export default function Home() {
  return (
    <HomeStyles>
      <section>
        <VideoHero youtubeId={"msJx7hxfuQI"} />
      </section>
      <Columns12>
        <h2 className="section--title">Welcome to Camp Konewago</h2>
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          incidunt exercitationem quam quod non quae necessitatibus in omnis ex
          laboriosam laudantium, consectetur explicabo magnam itaque odio cum
          tenetur libero aperiam.
        </p>
        <p className="section--link">
          <Link href="/about">
            <a>Read more about Camp Konewago</a>
          </Link>
        </p>
      </Columns12>
      <Columns12>
        <h2 className="section--title">Plan your 2021 Vacation</h2>
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          incidunt exercitationem quam quod non quae necessitatibus in omnis ex
          laboriosam laudantium, consectetur explicabo magnam itaque odio cum
          tenetur libero aperiam.
        </p>
        <p className="section--link">
          <Link href="/reserve">
            <a>Reserve Konewago Now</a>
          </Link>
        </p>
      </Columns12>
      <Columns12>
        <h2 className="section--title">Covid-19 Update</h2>
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          incidunt exercitationem quam quod non quae necessitatibus in omnis ex
          laboriosam laudantium, consectetur explicabo magnam itaque odio cum
          tenetur libero aperiam.
        </p>
        <p className="section--link">
          <Link href="/about">
            <a>Read more about our approach to your safety</a>
          </Link>
        </p>
      </Columns12>
      <Columns12>
        <h2 className="section--title">
          There's something special about Kojoko
        </h2>
        <img src="/images/kojoko.png" alt="kojoko cabin" />
        <p className="section--text">
          This is a magical place. For 7 days and nights our 4 adult kids,
          spouses and 8 grandkids created their own “family village” running
          from cabin to cabin, being with their cousins, uncles and aunts,
          sleepovers, exploring the woods and lake, fishing, baking cookies,
          dancing on the deck, making fairy houses, jumping off the dock,
          campfires. This is a place to create life long memories.
        </p>
        <p className="section--link">
          <Link href="/camp/cabins/kojoko">
            <a>Read more about Kojoko</a>
          </Link>
        </p>
      </Columns12>
      <Columns12>
        <h2 className="section--title">Look at featured_ammenity</h2>
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          incidunt exercitationem quam quod non quae necessitatibus in omnis ex
          laboriosam laudantium, consectetur explicabo magnam itaque odio cum
          tenetur libero aperiam.
        </p>
        <p className="section--link">
          <Link href="/reserve">
            <a>Reserve Konewago Now</a>
          </Link>
        </p>
      </Columns12>
      <Columns12>
        <h2 className="section--title">Keep In Touch</h2>
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas possimus
          sit delectus eos, repellendus distinctio minus?
        </p>
        <form className="newsletter--form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </form>
      </Columns12>
      <Columns12>
        <h2 className="section--title">Beautiful Lake Keoka</h2>
        <img src="/images/lake-keoka.png" alt="lake keoka" />
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          incidunt exercitationem quam quod non quae necessitatibus in omnis ex
          laboriosam laudantium, consectetur explicabo magnam itaque odio cum
          tenetur libero aperiam.
        </p>
        <p className="section--link">
          <Link href="/about">
            <a>Things to do on the lake</a>
          </Link>
        </p>
      </Columns12>
      <Columns12>
        <h2 className="section--title">Visit New England</h2>
        <img src="/images/new-england.jpg" alt="new england" />
        <p className="section--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          incidunt exercitationem quam quod non quae necessitatibus in omnis ex
          laboriosam laudantium, consectetur explicabo magnam itaque odio cum
          tenetur libero aperiam.
        </p>
        <p className="section--link">
          <Link href="/about">
            <a>Day Trips from Konewago</a>
          </Link>
        </p>
      </Columns12>
    </HomeStyles>
  );
}

import styled from "styled-components";

const HomeStyles = styled.main`
  section:nth-child(odd) {
    background-color: #e1e1e1;
  }
  h2.section--title {
    font-size: 34px;
    grid-column: 1/13;
    grid-row: 1/2;
  }

  p {
    font-size: 18px;
  }

  p.section--text {
    grid-column: 1/13;
    grid-row: 2/3;
  }

  p.section--link {
    grid-column: 1/13;
    grid-row: 3/4;
  }

  img {
    width: 100%;
    grid-column: 1/13;
  }

  form.newsletter--form {
    grid-column: 1/13;
    display: flex;
    input {
      padding: 12px;
      font-size: 18px;
      width: 40%;
    }
    button {
      background-color: ${Colors.black};
      min-width: 100px;
      border: 0;
      color: ${Colors.white};
      font-size: 18px;
    }
  }
`;
