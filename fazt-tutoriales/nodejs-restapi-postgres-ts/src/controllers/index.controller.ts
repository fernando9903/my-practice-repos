import {Request, response, Response} from 'express'
import {QueryResult} from 'pg'

import { pool } from '../database'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal server error')
    }
    
    
    //console.log(response.rows)
    //res.send('users')
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return res.json(response.rows);
    
    //res.send('received')
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {name, email} = req.body;
    const response: QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
    return res.json({
        message: "User created susccesfully",
        bady: {
            user: {
                name, 
                email
            }
        }
    })
    
    //console.log(name, email)
    //res.send('received')
}
/*
export const updateUser = (req: Request, res: Response): Promise<Response> => {
    
}

export const deletUserById = (req: Request, res: Response): Promise<Response> => {
    
}*/