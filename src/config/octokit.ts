import { Octokit } from 'octokit';
import { VITE_GITHUB_TOKEN } from './enviroments';

const octokit = new Octokit({
  auth: VITE_GITHUB_TOKEN,
});

export default octokit;