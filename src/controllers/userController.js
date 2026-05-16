import { user } from '../models/user.js';

const userController = (req, res) => {

    try{

        user.registrarUser(req.body.user);
        res.status(201).json({sucesso: 'O usuário foi inserido!'})

    }catch(error){
        res.status(500).json({ erro: error.message });
    }
}

export { userController };