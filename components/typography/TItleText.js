import React from 'react';

import styles from './TitleText.module.scss'


export default function TitleText(props) {
  return (
    <h1 style={styles.headerText}>
        {props.children}
    </h1>
  );
}