import OpenAI from 'openai';
import { API_KEY } from './constants';

export const client = new OpenAI({
  apiKey: API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
