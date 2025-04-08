import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: './src/api/openapi.yaml', // Path to your OpenAPI spec
    output: {
      mode: 'single',
      target: './src/api/generated/generated-queries.ts',
      client: 'react-query',
    },
  },
});