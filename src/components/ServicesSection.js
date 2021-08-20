import React from 'react';
import { MdShowChart, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Ce que je ferai pour toi"
          heading="Services"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="Créé votre site e-commerce ou site d'entreprise sur mesure."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="mobile web"
            desc="Associez au site web une application mobile bien conçu."
          />
          <ServicesSectionItem
            icon={<MdShowChart />}
            title="seo digital"
            desc="Soyez plus visible en ligne et sur les moteurs de recherche. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
