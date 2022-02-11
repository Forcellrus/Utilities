import createLogger from 'pino';

export default createLogger({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: undefined,
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
});
