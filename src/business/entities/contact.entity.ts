import { v4 as uuidv4 } from 'uuid';
import { Matches } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  phone: string;

  @Column()
  @Matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, { message: 'Invalid email address' })
  email: string;

  @Column()
  URL: string;

  @Column({ type: 'jsonb', nullable: true })
  socialMedia: Record<string, any>;

  constructor() {
    if (!this.id) {
      this.id = uuidv4(); // Generate a new UUID if the id is not set
    }
  }
}
