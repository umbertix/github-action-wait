module.exports = async ({github, core}) => {
    const {SHA, repoOwner, repoName} = process.env
    const result = await github.repos.listPullRequestsAssociatedWithCommit({
        owner: `${repoOwner}`,
        repo: `${repoName}`,
        commit_sha: `${SHA}`
    })

    const pr = result.data[0];

    core.setOutput('prNumber', (pr && pr.number) || '');
    core.setOutput('title', (pr && pr.title) || '');
    core.setOutput('body', (pr && pr.body) || '');
}
