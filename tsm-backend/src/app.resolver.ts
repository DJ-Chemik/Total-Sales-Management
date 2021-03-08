import { Query, Resolver } from "@nestjs/graphql";


@Resolver()
export class AppResolver {
    
    @Query(() => String)
    test(){
        return 'Welcome to Total Sales Management :)';
    }
}