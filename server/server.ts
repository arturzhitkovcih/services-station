import IControllerArgs from './types/IControllerArgs';
import employeesController from './controllers/employees';
import employeeController from './controllers/employee';
import projectsController from './controllers/projects';
import projectController from './controllers/project';
import skillsController from './controllers/skills';
import skillController from './controllers/skill';
import unitsController from './controllers/units';
import unitController from './controllers/unit';
import employeesProject from './controllers/employees_project';

const express = require("express");
const app = express();
const port = 8085;

const connectionObj = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'ourerp',
    password: 'admin',
    port: 5432
};

const controllerArgs = <IControllerArgs>{
    app,
    connectionObj
};

employeesController(controllerArgs);
employeeController(controllerArgs);
projectsController(controllerArgs);
projectController(controllerArgs);
skillsController(controllerArgs);
skillController(controllerArgs);
unitsController(controllerArgs);
unitController(controllerArgs);
employeesProject(controllerArgs);

app.get( "/", ( req: any,  res: any ) => {
    res.send( "Hi")
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port } ` );
});
