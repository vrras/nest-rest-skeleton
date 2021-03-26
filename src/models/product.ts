import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsString, Min, MinLength } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product', { schema: 'public' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'product_id', type: 'integer' })
  productId: number;

  @ApiProperty()
  @Column({ name: 'name' })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(2, { always: true })
  name: string;

  @ApiProperty()
  @Column({ name: 'sku' })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  sku: string;

  @ApiProperty()
  @Column({ name: 'price' })
  @IsNumber()
  @Min(0, { always: true })
  price: number;
}
