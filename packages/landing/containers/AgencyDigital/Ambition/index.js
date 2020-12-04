import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import SectionHeading from '../SectionHeading';
import Zoom from 'react-reveal/Zoom';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import List from 'common/src/components/List';


import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './customerSupport.style';
import { data } from 'common/src/data/AgencyDigital';
import illustration from 'common/src/assets/image/agencyDigital/illustration-2.png';

const Ambition = () => {
  return (
    <SectionWrapper id="ambition">
      <Zoom>
        <SectionHeading
          slogan="Une solution simple et adaptée"
          title="Notre ambition"
        />
      </Zoom>
      <Container>
        <Section>
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="Créer de la valeur par l'image"
            />
            <Text content="L'image fixe ou animée est coeur de votre organisation. C'est un outil pour votre communication, votre marketing. c'est aussi un élément pour mesurer votre activité et préparer une simulation 3D." />
            <ListGroup>
              {data.workHardList.map(item => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <Icon
                      icon={ic_check_circle}
                      size={18}
                      style={{ color: '#56BBD0' }}
                    />
                  }
                />
              ))}
            </ListGroup>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Ambition;
