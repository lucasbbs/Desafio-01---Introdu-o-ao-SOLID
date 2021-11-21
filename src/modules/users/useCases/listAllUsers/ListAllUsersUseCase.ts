import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();

    if (!users.find((user) => user.id === user_id).admin)
      throw new Error("User not admin");

    if (!users.some((user) => user.id === user_id))
      throw new Error("User not found");

    return users;
  }
}

export { ListAllUsersUseCase };
