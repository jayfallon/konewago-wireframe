import Link from "next/link";
import Columns12 from "components/Columns12";
import PageTitle from "components/PageTitle";
import PageSubTitle from "components/PageSubTitle";

import routes from "../../routes.json";

export default function index() {
  const { cabins } = routes;
  return (
    <CampStyles>
      <Columns12>
        <PageTitle>Welcome to our camp!</PageTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          culpa itaque. Quisquam corporis impedit distinctio, facilis ratione
          labore ducimus ex. Odio praesentium, ea soluta ex consequuntur
          delectus dolore beatae! Cupiditate!{" "}
        </p>
        <PageSubTitle>Our Cabins</PageSubTitle>
        {cabins.map((cabin, idx) => {
          return (
            <div className={`cabin--card ${cabin.title}`} key={idx}>
              <ul>
                <li className="cabin--title">
                  <Link href={`${cabin.url}`}>
                    <a>{cabin.text}</a>
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </Columns12>
    </CampStyles>
  );
}

import styled from "styled-components";

const CampStyles = styled.main`
  padding-top: 80px;

  h2 {
    text-transform: capitalize;
    grid-column: 1/13;
    grid-row: 1/2;
  }

  p {
    font-size: 18px;
    grid-column: 1/13;
    grid-row: 2/3;
  }

  h3 {
    grid-column: 1/13;
    grid-row: 3/4;
  }

  div.cabin--card {
    padding: 25px 12px 56.25%;
    border: 1px solid #333;
    &.konewago {
      grid-column: 1/4;
    }
    &.kojoko {
      grid-column: 4/7;
    }
    &.kasita {
      grid-column: 7/10;
    }
    &.kokaski {
      grid-column: 10/13;
    }

    ul {
      width: 100%;
      li.cabin--title {
        font-size: 20px;
        font-weight: bold;
        a {
          text-transform: capitalize;
        }
      }
    }
  }
`;
