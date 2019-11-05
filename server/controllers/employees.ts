import IControllerArgs from '../types/IControllerArgs';
import employee_model from './../models/employee_model';
import { Pool } from 'pg';

export default (controllerArgs: IControllerArgs) => {
    const app = controllerArgs.app;
    const connectionObj = controllerArgs.connectionObj;

    app.route('/api/employees')
        .get((request, response) => {
            const pool  = new Pool(connectionObj);
            const queryString = 'SELECT * FROM employee;';

            pool.query(queryString, (err:any, res:any) => {
                if (err){
                    response.end(err);
                    pool.end();

                    return;
                }

                response.json( employee_model(res.rows) );
                pool.end();
            });
        });
};
