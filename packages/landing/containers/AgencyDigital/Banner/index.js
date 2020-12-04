import React from 'react';
import Text from 'common/src/components/Text';
import Input from 'common/src/components/Input';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import canon from 'common/src/assets/image/agencyDigital/logo-canon.png';
import dji from 'common/src/assets/image/agencyDigital/logo-dji.png';
import adobe from 'common/src/assets/image/agencyDigital/logo-adobe.png';
import wp from 'common/src/assets/image/agencyDigital/logo-wp.png';
import react from 'common/src/assets/image/agencyDigital/logo-react.png';
import ionos from 'common/src/assets/image/agencyDigital/logo-ionos.png';
import apple from 'common/src/assets/image/agencyDigital/logo-apple.png';
import ww from 'common/src/assets/image/agencyDigital/logo-ww.png';


const Banner = () => {
  return (
    <Section id="accueil">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="ELEVER votre image et RENFORCER votre empreinte numérique"
            />

            <Text
              className="banner-caption"
              content="La transformation digitale est en marche et l'image est au coeur de votre activité. PIXasa propose et développe des solutions. Production et conseils, les conpétences sont nombreuses de la prise de vue à la diffusion:création de site web, image panoramique, 3D, 360°, image aérienne, livre numérique, initiation aux techniques photo."
            />

            <Subscribe>
              <Input
                inputType="email"
                placeholder="Donner votre adresse mel"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Envoyer" type="submit" />
            </Subscribe>

            <SponsoredBy>
              <Text className="sponsoredBy" content="technologies:" />
              <ImageGroup>
                <Image src={canon} alt="canon" />
                <Image src={dji} alt="dji" />
                <Image src={wp} alt="wordpress" />
                <Image src={ww} alt="ww" />
                <Image src={ionos} alt="ionos" />
                <Image src={react} alt="react" />
                <Image src={adobe} alt="adobe" />
                <Image src={apple} alt="apple" />
                
              </ImageGroup>
            </SponsoredBy>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
