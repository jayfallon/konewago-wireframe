import MapHero from "components/MapHero";
import Columns12 from "components/Columns12";
import PageTitle from "components/PageTitle";
import PageSubTitle from "components/PageSubTitle";

export default function contact() {
  return (
    <ContactStyles>
      <MapHero />
      <Columns12>
        <PageTitle>Contact</PageTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          obcaecati inventore qui molestiae voluptas. Eum, quisquam! Voluptates
          ipsa eligendi magnam similique. Assumenda possimus eligendi inventore
          tempora. Culpa ullam dolorum nam.
        </p>

        <ul className="contact--info-list mail">
          <li className="contact--info-title">Camp Konewago</li>
          <li className="contact--info-street">One Pine Tree Road</li>
          <li className="contact--info-city">Waterford, ME 04088</li>
          <li className="contact--info-phone">
            <a href="tel:6039648101">(603) 964-8101</a>
          </li>
          <li className="contact--info-email">
            <a href="mailto:guest@campkonewago.com">guest@campkonewago.com</a>
          </li>
        </ul>
        <div className="contact--form-wrapper">
          <PageSubTitle>Get in touch!</PageSubTitle>
          <form className="contact--form">
            <div className="form--group">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="form--group">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
            <div className="form--group">
              <label htmlFor="">Email Address</label>
              <input type="text" />
            </div>
            <div className="form--group">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="form--group submit">
              <button>Cancel</button>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </Columns12>
    </ContactStyles>
  );
}

import styled from "styled-components";

const ContactStyles = styled.main`
  padding-top: 80px;

  h2,
  h3 {
    grid-column: 1/13;
    grid-row: 1/2;
  }

  p {
    padding-bottom: 36px;
    font-size: 18px;
    grid-column: 1/13;
    grid-row: 2/3;
  }

  ul.contact--info-list {
    width: 100%;
    font-size: 18px;
    grid-column: 1/4;
    grid-row: 3/4;
    li {
      line-height: 1.25;
      &.contact--info-phone {
        margin-top: 12px;
      }
    }
  }

  div.contact--form-wrapper {
    grid-column: 5/13;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  form.contact--form {
    width: 100%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  div.form--group {
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &.submit {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      button {
        margin-left: 12px;
        font-size: 18px;
      }
    }

    label {
      margin-bottom: 8px;
    }

    input {
      padding: 6px;
      font-size: 18px;
    }
  }
`;
