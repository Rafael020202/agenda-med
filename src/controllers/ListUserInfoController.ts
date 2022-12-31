import { NotFoundError } from '@/errors';
import { notFound, ok } from '@/helpers';
import { Controller, HttpResponse, IUserRepository } from '@/protocols';

export class ListUserInfoController implements Controller {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: ListUserInfoController.Request): Promise<HttpResponse> {
    const user = await this.userRepository.findById(request.user_id);

    if (!user) {
      return notFound(new NotFoundError('user'));
    }

    delete user.password;

    return ok(user);
  }
}

export namespace ListUserInfoController {
  export type Request = {
    user_id: string;
  };
}
