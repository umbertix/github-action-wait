module.exports = ({imageTag, prNumber}) => {
    const prExtra = prNumber ? '' : `from [${prNumber}](https://github.com/Unity-Technologies/live-platform/pull/${prNumber})`;
    const message = `Update OCI Image tag to ${imageTag} ${prExtra} and release to test environment`;
    const body = 'This pull request was automatically generated from a Github Action.'
    return {
        'commit-message': message,
        title: message,
        body
    }
}
