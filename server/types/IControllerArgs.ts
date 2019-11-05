import express from 'express';

export default interface IControllerArgs {
    app: express.Application,
    connectionObj: Object
};
