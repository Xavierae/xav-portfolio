import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Xavier Ae</h1>
          <PText>
            Développeur Front End Web | Mobile Je travaille en freelance, j'aime
            concevoir et créer de nouvelles expériences.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Liens rapides"
            links={[
              {
                title: 'Bienvenue',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Qui suis-je',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projets',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="contact"
            links={[
              {
                title: '076 735 9369',
                path: 'tel:+2250767359369',
              },
              {
                title: 'ecclesiastexavier98@gmail.com',
                path: 'mailto:ecclesiastexavier98@gmail.com',
              },
              {
                title: "Port-Bouët Abidjan, Côte d'Ivoire",
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Liens sociaux"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/ecclesiastexavier/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/AssiEcclesiaste',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/aexavier/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Mon Portfolio | Par{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Xavierae"
            >
              Xavier Ae
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
