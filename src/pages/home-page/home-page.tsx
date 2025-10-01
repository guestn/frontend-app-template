import { FC } from 'react';
import { Container, Heading, Text, TextVariant } from '../../components/ui';
import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  return (
    <Container className={styles.pageContainer}>
      <Heading level={1}>Frontend App Template</Heading>
      <Text variant={TextVariant.Paragraph}>
        Use this template to ship wonderful apps.
      </Text>
    </Container>
  );
};
