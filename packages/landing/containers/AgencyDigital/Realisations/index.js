import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';

import { REALISATIONS } from 'common/src/data/AgencyDigital';

import {
  RealisationsSlideWrapper,
  RealisationsItem,
  RealisationsMeta,
  AuthorInfo,
  AuthorImage,
} from './realisations.style';

const RealisationsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  titre,
  description,
  commune,
  localisation,
}) => {
  const carouselOptions = {
    type: 'carousel',
    autoplay: 9000,
    perView: 1,
    gap: 30,
    animationDuration: 6800,
    breakpoints: {
      990: {
        perView: 1,
      },
    },
  };

  return (
    <Box {...sectionWrapper} as="section" id="realisations">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="REALISATIONS" />
          <Heading {...secHeading} content="Nos derniers travaux" />
        </Box>
        <RealisationsSlideWrapper>
          <GlideCarousel
            options={carouselOptions}
            carouselSelector="realisations__slider"
            controls={false}
            bullets={true}
            numberOfBullets={REALISATIONS.length}
          >
            <>
              {REALISATIONS.map((item, index) => (
                <GlideSlide key={`realisations-slide-${index}`}>
                  <RealisationsItem>
                    <Heading as="h3" content={item.titre} {...titre} />
                    <Text content={item.description} {...description} />
                        <AuthorImage>
                          <Image
                            src={item.image}
                            alt={`reviewer-image-${index}`}
                          />
                        </AuthorImage>
                        <Box>
                          <Heading as="h3" content={item.commune} {...commune} />
                          <Text content={item.localisation} {...localisation} />
                        </Box>
                  </RealisationsItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </RealisationsSlideWrapper>
      </Container>
    </Box>
  );
};

RealisationsSection.propTypes = {
  sectionHeader: PropTypes.object,
};

RealisationsSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '100px'],
    pb: ['60px', '80px', '90px', '100px', '100px'],
  },
  secTitleWrapper: {
    mb: ['40px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px',
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0,
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px',
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0,
  },
};

export default RealisationsSection;
