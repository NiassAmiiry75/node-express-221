// import { Request, Response, NextFunction } from 'express';
// import { Encrypt } from '../helpers/encrypt';

// const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
//     const { password } = req.body;

//     if (!password) {
//         return res.status(400).json({ message: "Le mot de passe est requis." });
//     }

//     try {
//         // Hache le mot de passe et l'ajoute à la requête
//         const hashedPassword = await Encrypt.cryptPassword(password);
//         req.body.password = hashedPassword; // Remplace le mot de passe par le haché
//         next(); // Passe au prochain middleware ou au contrôleur
//     } catch (error) {
//         res.status(500).json({ message: "Erreur lors du hachage du mot de passe." });
//     }
// };

// export default hashPassword;
