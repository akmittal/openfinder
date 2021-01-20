import { Router } from "express";
import { Connection } from "typeorm";
export declare function bootstrap(connection: Connection, uploadPath: string): Router;
