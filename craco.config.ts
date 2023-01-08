import path from 'path';

export default {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};
