import { githubAPIUrlPulls } from '../constants'

export const getReposCall = (url) =>{
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      return response.json();
    });
};

export async function getRepos(url) {
  const res = await getReposCall(url);
  return res;
}


export const getPullsOfRepoCall = (owner, repo) =>{
  return fetch(`${githubAPIUrlPulls}${owner}/${repo}/pulls?sort=created`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      return response.json();
    });
};

export async function getPullsOfRepo({owner, repo}) {
  const res = await getPullsOfRepoCall(owner, repo);
  return res;
}