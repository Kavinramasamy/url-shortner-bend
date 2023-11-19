import { } from 'dotenv/config.js';
import jwt from "jsonwebtoken";

export async function generateToken(value) {
    const token = jwt.sign({ id: value }, process.env.SECRET_KEY, { expiresIn: '1h' });
    return token

}