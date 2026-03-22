import { Tool } from '../types';

const listLanguages: Tool = {
  name: 'list_languages',
  description: 'Returns all language strings available in Findadoc.',
  async execute() {
    const languages = ['English', 'French', 'Spanish'];
    return languages;
  }
};

export default listLanguages;