import { NextFunction,Request,Response } from "express";
import { CreateVandorInput } from "../dto";
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const CreateVendor = async(req: Request, res: Response, next: NextFunction)=>{
const {    name,
    ownerName,
    foodType,
    pincode,
    address,
    phone,
    email,
    password} = <CreateVandorInput>req.body
   
   const existingVendor = await Vendor.findOne({email: email})
   if(existingVendor !== null){
    res.json({"message": 'A vendor already'})
   }else{
    const salt = await GenerateSalt()
    const userPassword = await GeneratePassword(password,salt)
    
    const createVendor = await Vendor.create({
        name:name,
        ownerName: ownerName,
        foodType:foodType,
        pincode: pincode,
        address: address,
        phone: phone,
        email: email,
        password: userPassword,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        salt: salt
    })

    res.json(createVendor)}

}

export const GetVendors = async(req: Request, res: Response, next: NextFunction)=>{
    
}
export const GetVendorsByID = async(req: Request, res: Response, next: NextFunction)=>{
    
}