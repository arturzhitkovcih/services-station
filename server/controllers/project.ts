import IControllerArgs from '../types/IControllerArgs';
// @ts-ignore
import { Pool } from 'pg';

export default (controllerArgs: IControllerArgs) => {
    const app = controllerArgs.app;
    const connectionObj = controllerArgs.connectionObj;

    app.route('/api/projects/:id')
        .get((request, response) => {
            const pool  = new Pool(connectionObj);
            const queryString = `SELECT * FROM project where id = ${request.params.id};`;

            pool.query(queryString, (err:any, res:any) => {
                if (err){
                    response.end(err);
                    pool.end();

                    return;
                }
                response.json( res.rows );
                pool.end();
            });
        });
};
