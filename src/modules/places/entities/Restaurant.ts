import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('restaurants')
class Restaurant {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  gallery: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @Column()
  coverImage: string;

  @Column()
  logoImage: string;

  @Column()
  address: string;

  @Column()
  rating: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Restaurant };
