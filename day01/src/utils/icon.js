export const installIcon = () => {
    const req = require.context('../icons/', false, /\.svg$/);
    req.keys().forEach(req);
}