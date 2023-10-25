const jwt = require("jsonwebtoken");
import { NextResponse } from "next/server";

const createToken = (data: object) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_TIME,
  });
  return token;
};

const verifyToken = (req: any, next: any) => {
  const authorizationHeader = req.headers["authorization"];
  // 'Beaer [token]'
  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1];
    if (!token) NextResponse.json({ msg: "Forbidden" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any) => {
      if (err) return NextResponse.json({ msg: "Unauthorized" });
      next();
    });
  } else {
    NextResponse.json({ msg: "Forbidden" });
  }
};

export { createToken, verifyToken };
