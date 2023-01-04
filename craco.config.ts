import path from 'path';

export default {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
