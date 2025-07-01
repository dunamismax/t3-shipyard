module.exports = {
  apps : [
    {
      name   : "trpchat-next",
      script : "npm",
      args   : "start",
      cwd    : "/Users/sawyer/Library/CloudStorage/GoogleDrive-stephenvsawyer@gmail.com/My Drive/github/t3-shipyard/apps/trpchat",
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name   : "trpchat-ws",
      script : "npm",
      args   : "run ws-dev",
      cwd    : "/Users/sawyer/Library/CloudStorage/GoogleDrive-stephenvsawyer@gmail.com/My Drive/github/t3-shipyard/apps/trpchat",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};