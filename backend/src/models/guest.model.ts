import { Schema, model } from "mongoose";

export interface Guest{
    id: string;
    name: string;
    password: string;
    email: string;
    typeProfile: string;
    company : string;
    adresse : string


}

export const GuestSchema = new Schema<Guest>({


    name:{ type:String, required: true},
    
    password:{ type:String, required: true},
    email:{ type:String, required: true},
    typeProfile:{type:String },
    company:{type:String,required: true},
    adresse:{type:String ,required : true}
    

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