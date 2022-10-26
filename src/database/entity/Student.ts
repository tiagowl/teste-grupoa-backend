import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ra: string

    @Column()
    name: string

    @Column()
    cpf: string;

    @Column()
    email: string

}
