import { Request, Response } from "express";
import Controller from "../core/impl/controller";
import prisma from "../core/impl/prisma.model";
import RestResponse from "../core/response";
import { StatusCodes } from "http-status-codes";

export class ArticleController extends Controller{
  async store(req: Request, res: Response) {
         try {
         const newData = await prisma.article.create({
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
            const newData = await prisma.article.findMany({
               select:{
                id: true,
                libelle: true,
                prix: true,
                quantiteStock: true,
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
            const newData = await prisma.article.findFirstOrThrow({
                where: { 
                    id: parseInt(req.params.id) 
                },
                select:{
                    id: true,
                    libelle: true,
                    prix: true,
                    quantiteStock: true,
                   } 
            })
            res.status(StatusCodes.OK)
            .send(RestResponse.response(newData,StatusCodes.OK));
            } catch (error) {
               res.status(StatusCodes.NOT_FOUND)
               .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
            }
    }

   async editByLibelle(req: Request, res: Response) {  
        try {
            const newData = await prisma.article.findFirstOrThrow({
                where: { 
                    libelle: req.body.libelle
                },
                select:{
                    id: true,
                    libelle: true,
                    prix: true,
                    quantiteStock: true,
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