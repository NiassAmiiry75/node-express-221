import { z } from "zod";

export const articlePostSchema = z.object({
  libelle: z.string({
    required_error: "le libelle est obli",

  }).min(3,).max(30,'user name   rrtrt'),
  
  prix: z.number().positive({
    message:"le prix doit etre positive"
  }),
  qteStock:z.number().positive({
    message:"le prix doit etre positive" 
})

})