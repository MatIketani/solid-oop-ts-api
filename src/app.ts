import express, { Application } from "express";
import morgan from "morgan";

const APP: Application = express();

APP.use(morgan("combined"));

export { APP };
