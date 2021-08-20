import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map-1.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Trouvez moi</h3>
          <PText>Abidjan, Côte d'Ivoire</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/A%C3%A9roport+d'Abidjan-F%C3%A9lix+Houphou%C3%ABt+Boigny/@5.2872421,-3.9572473,12z/data=!4m5!3m4!1s0x4763e33e19f81d0d:0x2e3b44b02fed1ce1!8m2!3d5.2542919!4d-3.9324168?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir dans google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
