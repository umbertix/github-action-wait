module.exports = async ({github, core, repository, prNumber, labels}) => {
    try {
        if (labels.length === 0){
            return
        }

        const [owner, repo] = repository.split('/');

        await github.issues.addLabels({
            labels,
            owner,
            repo,
            issue_number: prNumber
        });
    } catch (e) {
        core.error(e);
        core.setFailed(e.message);
    }
}
