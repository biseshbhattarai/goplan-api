import { env } from 'process';

export const config = {
  jwt: {
    secret: env.secret,
    signOptions: { expiresIn: '1d' },
  },
  db: {
    url: env.DATABASE_URL,
  },
};
