import * as jwt from "jsonwebtoken";

export const generateToken = (id: string): string => {
    const token = jwt.sign(
      {
        id
      },
      process.env.JWT_KEY as string,
      
    );
    return token;
}

