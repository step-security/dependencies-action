export const context = {
  get repo() {
    const [owner = '', repo = ''] = (process.env.GITHUB_REPOSITORY || '').split('/');
    return { owner, repo };
  },
  issue: { number: 0 }
};
export const getOctokit = () => {};
