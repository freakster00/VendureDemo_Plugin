
import { DemoService } from './demo.service';
import { DemoResolver } from './demo.resolver';
import { VendurePlugin,PluginCommonModule } from '@vendure/core';
import { schemaExtension } from './schemas/schemaExtension';

@VendurePlugin({
  imports:[PluginCommonModule],
  providers: [DemoService],
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [DemoResolver]
    },
    configuration: config => {
      config.customFields.Product.push({
        type: 'string',
        name: 'catImageUrl',
      });
      return config;
    }

})
export class DemoModule {}
