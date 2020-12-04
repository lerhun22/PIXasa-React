import React, { Fragment } from 'react';

import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/ContainerTwo';
import SectionHeading from '../SectionHeading';
import Zoom from 'react-reveal/Zoom';

import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import SectionWrapper, { ContentWrapper } from './features.style';
import feature from 'common/src/assets/image/agencyModern/features/feature.png';
import collectivite from 'common/src/assets/image/agencyDigital/collectivite-2.png';
import data from 'common/src/data/AgencyDigital';

const Collectivite = () => {
  return (
    <SectionWrapper id="collectivites">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Une solution simple et adaptée"
            title="Collectivités"
          />
        </Zoom>
        <ContentWrapper>
          <div className="content">
            
            {/**
            <Heading content="Expertise" />
             */}
            
            <Text content="Une palette d'outils: 360° - 3D - panoramique - montage vidéo - analyse images ..." />
            <Accordion preExpanded={[0]}>
              <Fragment>
                {data.accordion.map((item, index) => (
                  <AccordionItem key={index} uuid={index}>
                    <Fragment>
                      <AccordionTitle>
                        <Fragment>
                          <Heading as="h4" content={item.title} />
                          <IconWrapper>
                            <OpenIcon>
                              <Icon icon={thinRight} size={18} />
                            </OpenIcon>
                            <CloseIcon>
                              <Icon icon={thinDown} size={18} />
                            </CloseIcon>
                          </IconWrapper>
                        </Fragment>
                      </AccordionTitle>
                      <AccordionBody>
                        <Text content={item.description} />
                      </AccordionBody>
                    </Fragment>
                  </AccordionItem>
                ))}
              </Fragment>
            </Accordion>
          </div>
            <div className="image">
            <Image src={collectivite} alt="location de bouées" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Collectivite;
