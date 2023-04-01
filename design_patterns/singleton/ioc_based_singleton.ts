import "reflect-metadata";
import { injectable, Container } from "inversify"

interface IUsersApiService {
    getUsers() : Promise<string[]>
}

let Types = {
    UsersApiService : Symbol("UsersApiService")
}

@injectable()
class UsersApiServiceImpl implements IUsersApiService {
    getUsers(): Promise<string[]> {
        return Promise.resolve(["Alex", "Joshua", "John"])
    }
}

const container = new Container();
container
    .bind<IUsersApiService>(Types.UsersApiService)
    .to(UsersApiServiceImpl)
    .inSingletonScope()

container.get<IUsersApiService>(Types.UsersApiService).getUsers().then(resp => {
    console.log(resp);
})