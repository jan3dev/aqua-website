module.exports = {
  apps: [
    {
      name: "aqua-wallet",
      cwd: "/home/ubuntu/aqua-website",   
      script: "npm",
      args: "start",
      exec_mode: "fork",
      instances: 1,
      watch: false,
      max_memory_restart: "512M",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "127.0.0.1"
      }
    }
  ]
};
