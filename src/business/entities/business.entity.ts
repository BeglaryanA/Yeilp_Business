import { Optional } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { AddressEntity } from './address.entity';
import { ContactEntity } from './contact.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class BusinessEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  @Optional()
  feedback?: string;

  @Column()
  description: string;

  @Column()
  opening: Date;

  @Column()
  closing: Date;

  @Column({ nullable: true })
  @Optional()
  rate?: number;

  @OneToOne(() => AddressEntity, { "cascade": true })
  @JoinColumn()
  address: AddressEntity;

  @OneToOne(() => ContactEntity, { "cascade": true })
  @JoinColumn()
  contact: ContactEntity;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
