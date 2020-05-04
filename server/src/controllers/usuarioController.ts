import { Request, Response, json } from 'express';

import  pool  from '../database';

class UsuarioController{
//list the user
   public async list(req: Request ,res:Response){
      const tipo = await pool.query('SELECT * FROM usuario');
      res.json(tipo);
        
    }
//get user for id
    public async getOne(req: Request, res: Response){
         const result = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?',[req.params.id]);
         if(result.length > 0){
            return res.json(result[0]);
        }
        res.status(404).json({text: 'User dont finder'})
    }
//create new user
    public async create(req: Request, res: Response): Promise<void>{
     await pool.query('INSERT INTO usuario set ?', [req.body]);
     res.json({message: 'User is Created!!!'});
    }
// delete user by id
    public async delete(req:Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [id]);
        res.json({message: 'The user is Deleted'});
    }
//update user by id
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('UPDATE usuario set ? WHERE id_usuario = ?', [req.body, id])
        res.json({message:'The user in Updated'});
    }
}

export const usuarioController = new UsuarioController();