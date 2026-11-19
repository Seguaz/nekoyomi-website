import process from 'node:process'
import { defineLoader } from 'vitepress'
import { Octokit } from '@octokit/rest'
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { APP_REPO } from '../../config/constants'

// Fetched at BUILD time only (see release.data.ts).
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN || undefined })

type GitHubReleaseList = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.listReleases>

declare const data: GitHubReleaseList
export { data }

export default defineLoader({
  async load(): Promise<GitHubReleaseList> {
    const releases = await octokit.paginate(octokit.repos.listReleases, {
      ...APP_REPO,
      per_page: 100,
    })

    return releases
      // Never show drafts or pre-releases on the public changelog.
      .filter(release => !release.draft && !release.prerelease && release.published_at)
      .sort((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
  },
})
