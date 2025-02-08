import jwt from 'jsonwebtoken';

export const authenticateTokenFromCookie = (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log('token', token);
    if (!token) {
        return res
            .status(401)
            .json({ message: 'Access denied, token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res
                .status(403)
                .json({ message: 'Invalid or expired token' });
        }

        req.user = user;
        next();
    });
};
