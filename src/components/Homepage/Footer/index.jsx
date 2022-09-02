import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Logo from '../shared/Logo';
import ContactUsImage from '/img/homepage/contact-us.svg';
import SectionWrapper from '../shared/SectionWrapper';
import {useThemeConfig} from '@docusaurus/theme-common';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function FooterLink({to, href, label, prependBaseUrlToHref, icon, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: href.startsWith('/') ? '_self' : '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const Footer = () => {
  const {footer} = useThemeConfig();
  const {copyright, links = [], logo = {}} = footer || {};

  return (
    <SectionWrapper>
      <HelpUsBanner />
      <div className={styles.section}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.links}>
            {links.map((linkItem, i) => (
              <div key={i} className={styles.linksColumn}>
                  <h4 className={styles.columnTitle}>{linkItem.title}</h4>
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item"
                          // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink className={styles.pageLink} {...item} />
                        </li>
                      ),
                    )}
                  </ul>
              </div>
            ))}
          </div>
          {/* <div className={styles.links}>
            <div className={styles.linksColumn}>
              <div className={styles.columnTitle}>Docs</div>
              <a className={styles.pageLink} href='#'>Getting Started</a>
              <a className={styles.pageLink} href='#'>Downloads</a>
              <a className={styles.pageLink} href='#'>Deployment Guide</a>
              <a className={styles.pageLink} href='#'>Schedule a demo call</a>
            </div>
            <div className={styles.linksColumn}>
              <div className={styles.columnTitle}>Community</div>
              <a className={styles.pageLink} href='#'>Slack</a>
              <a className={styles.pageLink} href='#'>Twitter</a>
              <a className={styles.pageLink} href='#'>Github</a>
              <a className={styles.pageLink} href='#'>Contribute</a>
              <a className={styles.pageLink} href='#'>Roadmap</a>
              <a className={styles.pageLink} href='#'>Merch</a>
            </div>
            <div className={styles.linksColumn}>
              <div className={styles.columnTitle}>More</div>
              <a className={styles.pageLink} href='#'>Blog</a>
              <a className={styles.pageLink} href='#'>Carreers</a>
              <a className={styles.pageLink} href='#'>Privacy Policy</a>
              <a className={styles.pageLink} href='#'>Contact Us</a>
              <a className={styles.pageLink} href='#'>Status Page</a>
            </div>
          </div> */}

        </div>
        <div className={styles.copyRight}>Copyright © 2020 – 2022  Pyroscope, Inc</div>
      </div>
    </SectionWrapper>
  )
}

const HelpUsBanner = () => (
  <div className={styles.banner}>
    <ContactUsImage />
    <h3 className={styles.title}>Get started with Pyroscope Cloud<br/>for free</h3>
    <a href="https://pyroscope.cloud/signup" target="_blank" className={styles.joinPrivateBeta}>Sign Up</a>
  </div>
)

export default Footer;
