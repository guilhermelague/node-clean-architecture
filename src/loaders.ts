import express from "express";
import expressLoader from "./express_loader";

export default async function loaders(app: express.Express) {
    expressLoader(app);
}