import express, { Request, Response, NextFunction } from "express";
import routes from "./presentation/routes/routes"
import { IncomingMessage, ServerResponse } from "http";

export default function expressLoader(app: express.Express) {
    
    const rawBodySaver = function(req: IncomingMessage, res: ServerResponse<IncomingMessage>, buf: Buffer, encoding: string): void{
        if (buf && buf.length) {
            //req.rawBody = buf.toString(encoding || 'utf8');
        }
    };

    app.get('/status', (req, res) => {
        res.status(200).end();
    });

    app.use(express.json({
        limit: '150mb',
        verify: rawBodySaver
    }));
    
    app.use(express.urlencoded({
        limit: '150mb',
        extended: true,
        verify: rawBodySaver,
        parameterLimit:50000,
    }));
    
    app.use(express.raw({
        limit: '150mb',
        verify: rawBodySaver,
        type: '*/*'
    }));

    
    app.use('', routes());

    app.use('/', (req: Request, res: Response) => {
        res.send({
            status: "Online",
            message: "O servidor está online!",
        });
    });
}
