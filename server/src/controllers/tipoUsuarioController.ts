import { Request, Response, json } from 'express';

import  pool  from '../database';

class TipoUsuarioController{
//list the type User
   public async list(req: Request ,res:Response){
      const tipo = await pool.query('SELECT * FROM tipo_usuario');
      res.json(tipo);
        
    }
//get type User for id
    public async getOne(req: Request, res: Response){
         const result = await pool.query('SELECT * FROM tipo_usuario WHERE id = ?',[req.params.id]);
         if(result.length > 0){
            return res.json(result[0]);
        }
        res.status(404).json({text: 'Gamon dont finder'})
    }
//create new type User
    public async create(req: Request, res: Response): Promise<void>{
     await pool.query('INSERT INTO tipo_usuario set ?', [req.body]);
     res.json({message: 'tipo_usuario is Created!!!'});
    }
// delete type User by id
    public async delete(req:Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM tipo_usuario WHERE id = ?', [id]);
        res.json({message: 'The tipo_usuario is Deleted'});
    }
//update type User by id
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('UPDATE tipo_usuario set ? WHERE id = ?', [req.body, id])
        res.json({message:'the tipo_usuario in Updated'});
    }
}

export const tipoUsuarioController = new TipoUsuarioController();