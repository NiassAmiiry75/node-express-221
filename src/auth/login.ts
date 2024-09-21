import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key'; // Remplacez par votre propre clé secrète

interface LoginData {
  clientId: number;
  password: string;
}

// Exemple de fonction pour vérifier l'utilisateur
function authenticateUser(loginData: LoginData): boolean {
  // Logique pour vérifier les informations de connexion (par exemple, vérifier dans la base de données)
  // Retourne true si l'authentification est réussie, sinon false
  return true; // Remplacez par la logique d'authentification
}

export function loginUser(loginData: LoginData): string | null {
  if (authenticateUser(loginData)) {
    // Générer un token si l'authentification est réussie
    const token = jwt.sign({ clientId: loginData.clientId }, secretKey, { expiresIn: '1h' });
    return token;
  }
  return null;
}
