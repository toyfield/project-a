module.exports = {
    branchPrefix: 'renovate-self/',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    ignorePrAuthor: true,
    // use this to avoid conflicts with Renovate's own PRs
    dependencyDashboardTitle: "Action Dependency Dashboard",
    repositories: ["toyfield/project-a"],
    packageRules: [
      {
        description: 'lockFileMaintenance',
        matchUpdateTypes: [
          'pin',
          'digest',
          'patch',
          'minor',
          'major',
          'lockFileMaintenance',
        ],
        dependencyDashboardApproval: false,
        minimumReleaseAge: "0",
      },
    ],
    requireConfig: "ignored",
    inheritConfig: true,
    inheritConfigRepoName: 'toyfield/project-a',
    inheritConfigFileName: "renovate-action.json"
  };