import React from "react";

import { Dropdown, Divider, Image } from "semantic-ui-react";
import { v4 as uuid } from 'uuid';

import styles from "./Bodytext.module.scss";

export function CurrencyBodyText(props) {
    return (
        <>
            {props.currencyImage && <Image src={props.currencyImage} size="small" alt={props.currencyText} />}
            <p style={styles.currencyText}>{props.currencyText}</p>
            <Divider />
        </>
    );
}

export function BodyTextMd(props) {
    return <p style={styles.bodyTextMd}>{props.children}</p>
}

export function NavlinkText(props) {
  return (
    <div style={styles.navlinkContainer}>
      <a href={props.href} style={styles.navlinkText}>
        {props.children}
      </a>
    </div>
  );
}

export function NavlinkDropdown(props) {
  return (
    <Dropdown text={props.initialText}>
      <Dropdown.Menu>
        {props.navItems && props.navItems.length
          ? props.navItems.map((navItem) => (
              <Dropdown.Item
                key={uuid()}
                text={navItem.label}
                onClick={() => props.navItemClick(navItem.href)}
              />
            ))
          : null}
        {/* <Dropdown.Item text="Rename" description="ctrl + r" /> */}
        {/* <Dropdown.Item icon="trash" text="Move to trash" /> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}
