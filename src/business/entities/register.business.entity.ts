import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BusinesRegisterEntity {
  @PrimaryGeneratedColumn('uuid')
  id : string;

  @Column()
  name : string;

  @Column()
  password : string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4(); // Generate a new UUID if the id is not set
    }
  }
}