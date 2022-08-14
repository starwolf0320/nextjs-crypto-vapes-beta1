import Link from 'next/link';

import { Container, Divider, Image } from "semantic-ui-react";

import { SpaceBetweenContainer } from '@components/containers/Containers';
import navigationBarLogo from '@assets/navigation-bar-logo.svg';
import styles from './NavigationBar.module.scss';

const LogoBrand = (props) => (
    <Image src={navigationBarLogo.src} className={styles.navigationBarLogo} alt="Crypto Vapes Navigation Bar Logo" />
);

export default function NavigationBar({ title }) {
    //Use react-redux hook to get state from store.

    return (
        <Container className={styles.navigationBarContainer}>
            <SpaceBetweenContainer>
                <LogoBrand />
                <ul>
                    <li><Link href="/vapes"><a>Vapes</a></Link></li>
                    <li><Link href="/accessories"><a>Accessories</a></Link></li>
                    {
                        /* Conditionally render account dropdown link using user state from redux. */
                    }
                </ul>
                
            </SpaceBetweenContainer>
        </Container>
    );
}