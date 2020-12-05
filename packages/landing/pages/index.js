import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/agencyDigital';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/AgencyDigital/Navbar';
import Banner from '../containers/AgencyDigital/Banner';
import Services from '../containers/AgencyDigital/Services';
import Ambition from '../containers/AgencyDigital/Ambition';
import TeleAssistance from '../containers/AgencyDigital/TeleAssistance';
import Footer from '../containers/AgencyDigital/FooterAppModern';
import Collectivite from '../containers/AgencyDigital/Collectivite';
import Realisations from '../containers/AgencyDigital/Realisations';
import FaqSection from '../containers/AgencyDigital/Faq';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>PIXasa | Production & Conseils</title>
          <meta name="theme-color" content="#FF0033" />
          <meta name="Description" content="PIXasa,télépilote,production,images,panoramique,360°,drone,conseil,formation,stage,livre photo,react,wordpress,indesign,photoshop,site web,transformation numérique" />

          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i|Lato+Sans:400,400i,500,500i,700,700i|Montserrat+Sans:400,400i,500,500i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <Banner />

          <Services />

          <Ambition />
          
          <Realisations />
          
          <Collectivite /> {/** NEW Accordion*/}

          <TeleAssistance />

          <FaqSection />
          
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
