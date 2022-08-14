import { Container } from 'semantic-ui-react';

import styles from './Containers.module.scss';

export function SpaceBetweenContainer(props) {
    return (
        <Container className={styles.columnContainerSpaceBetween}>
            {props.children}
        </Container>
    );
}