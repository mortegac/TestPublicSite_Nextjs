import Prismic from '@prismicio/client';
import Link from 'next/link';
import {
  endpoint,
  accessToken,
  hrefResolver,
} from '../prismicio';
// } from '../prismic-configuration';

// Helper function to get the Prismic repository name from the URL
export const [, prismicRepoName] = endpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content) => (
  <Link
    key={element.data.id}
    href={hrefResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);


// Client method to query documents from the Prismic repo

export const Client = (req = null) =>
  Prismic.client(endpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};


export const manageLocal = (Locales, locale) => {
  // Languages from API response
// // Setting Master language as default language option
const mainLanguage = Locales[0];
// // Sets current language based on the locale
const currentLang = locale !== undefined ? locale : mainLanguage;
const isMyMainLanguage = mainLanguage === currentLang;

return { mainLanguage, currentLang, isMyMainLanguage }
}
