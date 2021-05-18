import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from '../user/user.entity';


@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async getUserList(): Promise<UserEntity> {

    const query = this.createQueryBuilder('user')

    query.select(['user.id', 'user.login'])

    const list:any = await query.getMany()

    return list
    
  }
}
