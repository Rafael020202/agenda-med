import { ok } from '@/helpers';
import { Controller, HttpResponse, IUserRepository } from '@/protocols';

export class ListUserInfoController implements Controller {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: ListUserInfoController.Request): Promise<HttpResponse> {
    const user = await this.userRepository.findById(request.userId);

    return ok(user);
  }
}

export namespace ListUserInfoController {
  export type Request = {
    userId: string;
  };
}
