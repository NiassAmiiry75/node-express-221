import express from 'express';
import { registerUser } from '../auth/register';
import { loginUser } from '../auth/login';

import {Router} from "express"
const app = express();
const routerLogin = Router();
app.use(express.json());

app.post('/register', (req, res) => {
  const { clientId, password } = req.body;
  const token = registerUser({ clientId, password });
  res.json({ token });
});

app.post('/login', (req, res) => {
  const { clientId, password } = req.body;
  const token = loginUser({ clientId, password });
  if (token) {
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
export default routerLogin;