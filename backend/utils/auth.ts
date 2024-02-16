import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const jwtMySecret = "nyiwaingchit007df";
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  const authorization = headers.authorization;

  if (!authorization) return res.status(401).send("unauthorize one");
  try {
    const accesstoken = authorization.split(" ")[1];

    const valid = jwt.verify(accesstoken, jwtMySecret);
    console.log(accesstoken, valid);
    next();
  } catch (err) {
    return res.status(401).send("unauthorize");
  }
};
