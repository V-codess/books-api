import express, {Request,Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import database from './connectDB/connect'
import Router from "./routes/routes";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './docs/apidocs';

const port =  Number(process.env.PORT) || 8080
dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req: Request, res: Response)=>{
    res.send('Welcome to the library')
})
app.use("/", Router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

const startServer = async() =>{
    try {
        const url: string = process.env.URL || "";
        await database(url);
        app.listen(port, ()=> console.log(`Running server at ${port}`))
    } catch (error) {
        console.log(error)
    }
}

startServer()  