import { createServer } from './createServer';
import listLanguages from './tools/listLanguages';

const server = createServer();
server.registerTool(listLanguages);
server.start();