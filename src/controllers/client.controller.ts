import Controller from "../core/impl/controller";
import { Request, Response } from "express";
import prisma from "../core/impl/prisma.model";
import RestResponse from "../core/response";
import { StatusCodes } from "http-status-codes";

export class ClientController extends Controller{
    
  async store(req: Request, res: Response) {
    try {
    const newData = await prisma.client.create({
        data: req.body,
    })
    res.status(StatusCodes.OK)
    .send(RestResponse.response(newData,StatusCodes.OK));
    } catch (error) {
       res.status(StatusCodes.NOT_FOUND)
       .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
    }
}

async show(req: Request, res: Response) {
   try {
       const newData = await prisma.client.findMany({
          select:{
           id: true,
           nom: true,
           prenom: true,
           telephone: true,
          }
       })
       res.status(StatusCodes.OK)
       .send(RestResponse.response(newData,StatusCodes.OK));
       } catch (error) {
          res.status(StatusCodes.NOT_FOUND)
          .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
       }
}

async edit(req: Request, res: Response) {
   try {
       const newData = await prisma.client.findFirstOrThrow({
           where: { 
               id: parseInt(req.params.id) 
           },
           select:{
            id: true,
            nom: true,
            prenom: true,
            telephone: true,
              } 
       })
       res.status(StatusCodes.OK)
       .send(RestResponse.response(newData,StatusCodes.OK));
       } catch (error) {
          res.status(StatusCodes.NOT_FOUND)
          .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
       }
}

async editByTelephone(req: Request, res: Response) {  
   try {
       const newData = await prisma.client.findFirstOrThrow({
           where: { 
               telephone: req.body.telephone
           },
           select:{
            id: true,
            nom: true,
            prenom: true,
            telephone: true,
              } 
       })
       res.status(StatusCodes.OK)
       .send(RestResponse.response(newData,StatusCodes.OK));
       } catch (error) {
          res.status(StatusCodes.NOT_FOUND)
          .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
       }
}         
        
}