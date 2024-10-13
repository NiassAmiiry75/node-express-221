// import { RequestHandler } from 'express';
// import { articlePostSchema } from './schema/article.post.schema';

// // Définissez votre schéma de validation (par exemple, avec Zod ou Joi)
// ;// Assurez-vous que le chemin et l'importation sont corrects

// export const supportedMethods = ["post", "put", "patch", "delete"];

// const validatorArticle = (): RequestHandler => {
//     return (req, res, next) => {
//         const method = req.method.toLowerCase();

//         if (!supportedMethods.includes(method)) {
//             return next();
//         }

//         try {
//             articlePostSchema.parse(req.body); // Utilisez la méthode correcte pour valider le corps de la requête
//             next(); // Passez au middleware suivant si la validation réussit
//         } catch (error) {
//             //const typedError = error as Error; // Type assertion
//             res.status(400).json({ error: 'Invalid request data', details: error.message });
//         }
//     };
// };

// export default validatorArticle;
 