import { createClient } from 'contentful';

const client = createClient({
  space: '4gt7gf22grva', // Replace with your Contentful space ID
  accessToken: '9Dey96BWVKDcmHYZwdrVLJ2fTIEaRg0sty6_wW_ODa8', // Replace with your Contentful access token
});

export default client;