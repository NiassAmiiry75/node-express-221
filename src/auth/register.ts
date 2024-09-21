import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key'; // Remplacez par votre propre clé secrète

interface User {
  clientId: number;
  password: string;
}

export function registerUser(user: User): string {
  // Logique pour enregistrer l'utilisateur dans la base de données

  // Une fois enregistré, générez un token pour cet utilisateur
  const token = jwt.sign({ clientId: user.clientId }, secretKey, { expiresIn: '1h' });
  return token;
}
