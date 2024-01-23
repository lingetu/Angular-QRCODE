import { Schema, model } from "mongoose";

export interface Guest{
    id: string;
    name: string;
    company:string;
    password: string;
    email: string;
    adresse:string;

}

export const GuestSchema = new Schema<Guest>({


    name:{ type:String, required: true},
    company:{ type:String, required: true},
    password:{ type:String, required: true,unique:true},
    email:{ type:String, required: true},
    adresse:{ type:String, required: true},

},{
    toJSON:{
        virtuals : true
    },
    toObject:{
        virtuals : true
    }
}
) ;


export const GuestModel = model<Guest>('guest', GuestSchema);