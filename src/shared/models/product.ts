import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('product', { schema: 'public' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_id',
  })
  productId: number;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ groups: [CREATE] })
  @MinLength(2, { groups: [CREATE] })
  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'name',
  })
  name: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ groups: [CREATE] })
  @MinLength(3, { groups: [CREATE] })
  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'sku',
  })
  sku: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsNumber()
  @Min(0, { groups: [CREATE] })
  @Column('bigint', {
    nullable: false,
    name: 'price',
  })
  price: number;
}
