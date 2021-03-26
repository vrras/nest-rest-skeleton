import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsString, Min, MinLength } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product', { schema: 'public' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_id',
  })
  id: number;

  @ApiProperty()
  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'name',
  })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(2, { always: true })
  name: string;
  
  @ApiProperty()
  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'sku',
  })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  sku: string;
  
  @ApiProperty()
  @Column('bigint', {
    nullable: false,
    name: 'price',
  })
  @IsNumber()
  @Min(0, { always: true })
  price: number;
}
