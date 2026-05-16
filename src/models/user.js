import { pool } from './connection.js';

const user = {
    registrarUser: async (userToSave) => {
        const query = 'INSERT INTO usuario (nome, data_nascimento, cpf, email, login, senha, tipo_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';

        const valores = [userToSave.nome, userToSave.data_nascimento, userToSave.cpf, userToSave.email, userToSave.login, userToSave.senha, userToSave.tipo_usuario];

        const resultado = await pool.query(query, valores);
    }
}

export { user };