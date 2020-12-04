import React from 'react';
import { Icon } from 'react-icons-kit';
import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight';
import { rgba } from 'polished';
import SectionHeading from '../SectionHeading';
import Zoom from 'react-reveal/Zoom';
import Container from 'common/src/components/UI/ContainerTwo';
import Image from 'common/src/components/Image';
import illustration from 'common/src/assets/image/agencyDigital/support_illustration.png';
import { data } from 'common/src/data/AgencyDigital';
import Section, {
  ContentWrapper,
  Content,
  HelpBlock,
  Illustration,
} from './support.style';

const TeleAssistance = () => {
  return (
    <Section as="section" id="teleassistance">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Une solution simple et adaptée"
            title="Télé Assistance et formation"
          />
        </Zoom>
        <ContentWrapper>
          <Content>
            <p>
              De nombreux logiciels sont gratuits et disponible à la communauté. PIXasa propose un service d'aide en ligne pour démarrer votre projet. Création de livre photos, traitement d'image, création de site web simple, etc ...
            </p>
            {data.helps.map(help => (
              <HelpBlock key={help.id}>
                <div className="icon">
                  <Image src={help.icon} alt={help.title} />
                </div>
                <div className="content">
                  <h4>
                    {help.title}{' '}
                    <Icon
                      icon={iosArrowThinRight}
                      size={30}
                      style={{ color: rgba('#0F2137', 0.3) }}
                    />
                  </h4>
                  <p>{help.desc}</p>
                </div>
              </HelpBlock>
            ))}
          </Content>
          <Illustration>
            <Image src={illustration} alt="" />
          </Illustration>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default TeleAssistance;
