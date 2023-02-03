import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Examples from './collections/Examples';
import News from './collections/News'

export default buildConfig({
  serverURL: 'http://localhost:42069',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Examples,
    News, 
    Media
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
