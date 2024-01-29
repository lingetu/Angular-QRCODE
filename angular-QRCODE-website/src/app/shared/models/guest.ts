import { IEventCreation } from "../interfaces/IEventCreation";
export class Guest{
    id!: string;
   company!:string;
    password!: string;
    email!: string;
    name!: string;
    adresse!:string;
    event !: IEventCreation[];

}
