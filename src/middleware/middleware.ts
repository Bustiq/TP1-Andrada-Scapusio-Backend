import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
 
export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // El token se espera en formato "Bearer <token>"
 
  if (!token) {
    res.status(403).json({ mensaje: 'Token no proporcionado' });
    return; // Termina la ejecución aquí
  }
 
  try {
    const secretKey = 'Medieburger'; // Usa la misma clave secreta que usaste para generar el token
    const decoded = jwt.verify(token, secretKey); // Verifica el token
    next(); // Continúa con la siguiente función o controlador
  } catch (error) {
    res.status(403).json({ mensaje: 'Token inválido o expirado' });
    return; // Termina la ejecución aquí
  }
};