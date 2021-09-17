module.exports = (imageTag, prNumber, rawTitle, rawBody, { core }) => {
    var title = `Update OCI Image tag to ${imageTag} and release to test environment`;
    var message = title;
    var body = 'This pull request was automatically generated from a Github Action.';

    if (prNumber) {
        title = `Update OCI Image tag to ${imageTag} from PR#${prNumber} and release to test environment`;
        message = `Update OCI Image tag to ${imageTag} from PR#${prNumber} and release to test environment`;
        body = 'This pull request was automatically generated from a Github Action.\n' +
            `The PR ${rawTitle} [${prNumber}](https://github.com/Unity-Technologies/live-platform/pull/${prNumber}) is the origin for this changes\n` +
        `<details> <summary> ${rawTitle} </summary> ${rawBody} </details>`;
    }

    core.setOutput('commit-message', message);
    core.setOutput('title', title);
    core.setOutput('body', body);
}
