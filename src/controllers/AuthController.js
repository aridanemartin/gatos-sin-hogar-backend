export class AuthController {
    loginWithGoogle = async (req, res) => {
        try {
            const response = await AuthModel.loginWithGoogle(req.body.token);

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: true,
                maxAge: 3600000 // 1 hour
            });

            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Autenticación fallida' });
        }
    };

    authenticate = (req, res) => {
        res.json({ isAuthenticated: true, user: req.user });
    };

    logout = (req, res) => {
        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: true
        });
        res.json({ message: 'Logout exitoso' });
    };
}
