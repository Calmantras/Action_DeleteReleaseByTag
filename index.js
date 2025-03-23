const core = require('@actions/core');
const { context} = require('@actions/github');
const github = require('@actions/github');
const fs = require("fs");

(async () => {
    try {
        // Get authenticated GitHub client (Ocktokit): https://github.com/actions/toolkit/tree/master/packages/github#usage
        const gh = new github.getOctokit(process.env.GITHUB_TOKEN)

        // Get owner and repo from context of payload that triggered the action
        const { owner: currentOwner, repo: currentRepo } = context.repo

        const assetTag = core.getInput('asset_tag', { required: false } || 'Latest')

        // Getting the uploadUrl of the Release with the Latest tag
        const releaseRes = await gh.repos.getReleaseByTag({
            owner: currentOwner,
            repo: currentRepo,
            tag: assetTag
        })

        // The releaseId with specified tag
        const releaseId = releaseRes.data.id
        core.info(`Found Repo with tag: ${assetTag}. Id is: ${releaseId}`)

        await gh.repos.getReleaseByTag({
            owner: currentOwner,
            repo: currentRepo,
            release_id: releaseId,
        })

        core.info(`Release was deleted successfully.`)
    } catch (error) {
        core.setFailed(error.message)
    }
})();