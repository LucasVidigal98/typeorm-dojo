import { v4 as uuidV4 } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity("users_dojo")
class User {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  age?: number;

  @CreateDateColumn()
  createdAt: Date | undefined;

  constructor() {
    this.id = uuidV4();
    this.createdAt = new Date();
  }
}

export { User };