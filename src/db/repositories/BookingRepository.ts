import {
  EntityManager,
  EntityRepository,
  FindManyOptions,
  ObjectLiteral,
} from 'typeorm'

import { BookingCreateOptions, BookingEntity } from '../entities'

@EntityRepository()
export class BookingRepository {
  constructor(private manager: EntityManager) {}

  public create(createOptions: BookingCreateOptions): BookingEntity {
    return new BookingEntity(createOptions)
  }

  public async save(entity: BookingEntity): Promise<BookingEntity | null> {
    // TODO: Catch duplication errors
    return this.manager.save(entity)
  }

  public async findAll(): Promise<BookingEntity[]> {
    const where: ObjectLiteral = {}
    const findOptions: FindManyOptions = {
      where,
    }

    return this.manager.find(BookingEntity, findOptions)
  }
}
