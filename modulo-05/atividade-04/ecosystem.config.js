module.exports = {
  apps: [
    {
      name: "Backend API",
      script: "npm",
      args: "start",
      cwd: "./Backend-API/",
      watch: true,
      watch_delay: 1000,
      "ignore_watch": ["node_modules"]
    },
    {
      name: "Frontend API",
      script: "npm",
      args: "start",
      cwd: "./Frontend-API/",
      watch: true,
      watch_delay: 1000,
      "ignore_watch": ["node_modules"]    
    },
  ],
};
