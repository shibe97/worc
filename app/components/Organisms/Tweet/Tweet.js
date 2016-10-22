import React from 'react';
import Meta from '../../Molecules/Meta/Meta';
import Triggers from '../../Molecules/Triggers/Triggers';
import Text from '../../Atoms/Text/Text';
import styles from './tweet.css';

export default ({ tweet = {} }) => (
  <dl>
    <dt>
      <Meta tweet={tweet} />
    </dt>
    <dd>
      <Text tweet={tweet} />
    </dd>
    <dd className={styles.actions}>
      <Triggers tweet={tweet} />
    </dd>
  </dl>
);
