import {pool} from './database.js';

class LibroController{
  async getAll (req,res){
    const result = await pool.query('SELECT * FROM libros')
    res.json(result);

  }

  async add(req, res){
    const libro = req.body;
    const [result] = await pool.query(`INSERT INTO libros(nombre,autor,categoria,año_publicacion,ISBN) VALUES (?,?,?,?,?)`,[libro.nombre,libro.autor,libro.categoria,libro.año_publicacion,libro.ISBN]);
    res.json({"Id insertado": result.insertid});


  }

}

export const libro = new LibroController();