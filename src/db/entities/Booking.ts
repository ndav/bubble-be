import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export type BookingCreateOptions = {
  externalId?: string
  parentId?: string
  start?: Date
  duration?: number
}

const tableName = 'booking'
@Entity({ name: tableName })
export class BookingEntity {
  @PrimaryGeneratedColumn('uuid')
  public id?: string

  @Column({ type: 'varchar', length: '255', unique: true })
  @Index(`IDX_${tableName}:externalId`)
  public externalId: string

  @Column({ type: 'varchar', length: '255' })
  @Index(`IDX_${tableName}:parentId`)
  public parentId: string

  @Column({ type: 'timestamptz' })
  public start: Date

  @Column({ type: 'float' })
  public duration: number

  @CreateDateColumn()
  public createdAt?: Date

  @UpdateDateColumn()
  public updatedAt?: Date

  constructor({
    externalId,
    parentId,
    start,
    duration,
  }: BookingCreateOptions = {}) {
    if (externalId !== undefined) {
      this.externalId = externalId
    }
    if (parentId !== undefined) {
      this.parentId = parentId
    }
    if (start !== undefined) {
      this.start = start
    }
    if (duration !== undefined) {
      this.duration = duration
    }
  }
}
