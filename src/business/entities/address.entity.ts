import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity()
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postalCode: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4(); // Generate a new UUID if the id is not set
    }
  }
}