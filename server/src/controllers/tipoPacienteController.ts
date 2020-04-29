import { Request, Response, json } from 'express';

import  pool  from '../database';

class TipoPacienteController{
//list the type
   public async list(req: Request ,res:Response){
      const tipo = await pool.query('SELECT * FROM tipo_paciente');
      res.json(tipo);
        
    }
//get type for id
    public async getOne(req: Request, res: Response){
         const result = await pool.query('SELECT * FROM tipo_paciente WHERE id = ?',[req.params.id]);
         if(result.length > 0){
            return res.json(result[0]);
        }
        res.status(404).json({text: 'Gamon dont finder'})
    }
//create new type
    public async create(req: Request, res: Response): Promise<void>{
     await pool.query('INSERT INTO tipo_paciente set ?', [req.body]);
     res.json({message: 'tipo_paciente is Created!!!'});
    }
// delete type by id
    public async delete(req:Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM tipo_paciente WHERE id = ?', [id]);
        res.json({message: 'The tipo_paciente is Deleted'});
    }
//update type by id
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('UPDATE tipo_paciente set ? WHERE id = ?', [req.body, id])
        res.json({message:'the tipo_paciente in Updated'});
    }
}

export const tipoPacienteController = new TipoPacienteController();