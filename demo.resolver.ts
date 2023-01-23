import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Ctx,Allow,Permission, ProductService,RequestContext} from '@vendure/core';
import { DemoService } from './demo.service';


@Resolver()
export class DemoResolver {
    constructor(private productService: ProductService, 
        private DemoService: DemoService) {}

@Mutation()
@Allow(Permission.UpdateCatalog)
async addRandomCat(@Ctx() ctx: RequestContext, @Args() args) {
const catImageUrl = await this.DemoService.fetchCat();
return this.productService.update(ctx, {
id: args.id,
customFields: { catImageUrl },
});
}
}
