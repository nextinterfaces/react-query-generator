import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: './src/openapi.yaml', // Path to your OpenAPI spec
    output: {
      mode: 'single',
      target: './src/generated-api/generated-queries.ts',
      client: 'react-query',
    },
  },
});