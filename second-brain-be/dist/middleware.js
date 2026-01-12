import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
export function userMiddleware(req, res, next) {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, JWT_SECRET);
    if (decoded) {
        // @ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            msg: "You are not logged in"
        });
    }
}
//# sourceMappingURL=middleware.js.map