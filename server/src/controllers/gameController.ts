import { Request, Response, json } from 'express';

import  pool  from '../database';

class GameController{
//list the games
   public async list(req: Request ,res:Response){
      const games = await pool.query('SELECT * FROM games');
      res.json(games);
        
    }
//get games for id
    public async getOne(req: Request, res: Response){
         const result = await pool.query('SELECT * FROM games WHERE id = ?',[req.params.id]);
         if(result.length > 0){
            return res.json(result[0]);
        }
        res.status(404).json({text: 'Gamon dont finder'})
    }
//create new game
    public async create(req: Request, res: Response): Promise<void>{
     await pool.query('INSERT INTO games set ?', [req.body]);
     res.json({message: 'Games is Created!!!'});
    }
// delete game by id
    public async delete(req:Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'The Game is Deleted'});
    }
//update game by id
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
       await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id])
        res.json({message:'the Game in Updated'});
    }
}

export const gameController = new GameController();