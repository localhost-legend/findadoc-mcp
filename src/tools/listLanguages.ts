import { Tool } from '../types';
import { gql } from '@apollo/client';

const LIST_LANGUAGES = gql`
  query ListLanguages {
    languages {
      name
    }
  }
`;

const listLanguages: Tool = {
  name: 'list_languages',
  description: 'Returns all language strings available in Findadoc.',
  inputParameters: null,
  execute: async () => {
    const response = await fetch('https://findadoc.jp/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: LIST_LANGUAGES })
    });
    const data = await response.json();
    return data.data.languages.map((language: any) => language.name);
  }
};

export default listLanguages;