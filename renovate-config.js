module.exports = {
    branchPrefix: 'renovate-self/',
    // username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    forkProcessing: 'enabled',
    autodiscover: true,
    autodiscoverFilter: ["toyfield/project-a"],
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
  };