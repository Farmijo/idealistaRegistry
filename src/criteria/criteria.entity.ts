import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Criteria{

    @PrimaryGeneratedColumn() id: number;
    @Column() country: string;
    @Column() operation: string;
    @Column() propertyType:  string
    @Column() coordinates: string;
    @Column() distance: string;
    @CreateDateColumn() created_at: Date
}