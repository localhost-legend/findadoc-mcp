import { Tool } from '../types';

const listLanguages: Tool = {
  name: 'list_languages',
  description: 'Returns all language strings available in Findadoc.',
  parameters: [],
  async execute() {
    const languages = ['English', 'French', 'Spanish']; // Replace with actual GQL query
    return languages;
  }
};

export default listLanguages;