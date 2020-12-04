import React from 'react';
import Zoom from 'react-reveal/Zoom';
import SectionHeading from '../SectionHeading';

import {
  SlideWrapper,
  Item,
  Meta,
  Info,
  Image,
} from './newsection.style';

const NewSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  titre,
  description,
  commune,
  localisation,
}) => {

    <Box {...sectionWrapper} as="section" id="realisations">
        <Container>
            <Zoom>
                <SectionHeading
                    slogan="Une solution simple et adaptée"
                    title="Nouvelles technologies à votre service"
                />
            </Zoom>
        </Container>
    </Box>
    );
};

New.propTypes = {
  sectionHeader: PropTypes.object,
};

NewSection.defaultProps = {
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

export default NewSection;
