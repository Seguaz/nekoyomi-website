import process from 'node:process'
import { defineLoader } from 'vitepress'
import { Octokit } from '@octokit/rest'
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { APP_REPO } from '../../config/constants'

// Release data is fetched at BUILD time only. Visitors' browsers never call the GitHub API.
// In CI the read-only GITHUB_TOKEN is used to avoid the anonymous rate limit.
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN || undefined })

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
  stable: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
  async load(): Promise<AppRelease> {
    const { data: stable } = await octokit.repos.getLatestRelease(APP_REPO)

    return { stable }
  },
})
