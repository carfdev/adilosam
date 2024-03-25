import type { RobotsTxtOptions } from 'astro-robots-txt';
import siteConfig from './site.config';

const robotsConfig: RobotsTxtOptions = {
  policy: [
    {
      userAgent: '*',
      // The next line enables or disables the crawling on the `robots.txt` level
      disallow: siteConfig.disableIndexing ? '/' : '',
    },
  ],
  sitemap: false, // default 'sitemap-index'
};

export default robotsConfig;