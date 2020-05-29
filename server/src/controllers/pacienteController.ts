import { Request, Response, json } from 'express';

import  pool  from '../database';

class PacienteController{
//list the paciente
   public async list(req: Request ,res:Response){
      const tipo = await pool.query('SELECT * FROM paciente');
      res.json(tipo);
        
    }
//get paciente for id
    public async getOne(req: Request, res: Response){
         const result = await pool.query('SELECT * FROM paciente WHERE id_paciente = ?',[req.params.id]);
         if(result.length > 0){
            return res.json(result[0]);
        }
        res.status(404).json({text: 'Paciente don`t finder'})
    }
//create new Paciente
    public async create(req: Request, res: Response): Promise<void>{
     await pool.query('INSERT INTO paciente set ?', [req.body]);
     res.json({message: 'Paciente is Created!!!'});
    }
// delete Paciente by id
    public async delete(req:Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM paciente WHERE id_paciente = ?', [id]);
        res.json({message: 'The Paciente is Deleted'});
    }
//update Paciente by id
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('UPDATE PAciente set ? WHERE id_paciente = ?', [req.body, id])
        res.json({message:'The Paciente in Updated'});
    }
}

export const pacienteController = new PacienteController();