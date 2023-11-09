const jwt = require('jsonwebtoken');

const tokenVerification = (req,res,next) => {
    const token = req.headers['x-access-headers'];
    if(!token){
        res.status(202).json({auth:false, token: null});
    }
    const decoded = jwt.verify(token,process.env.SECRET);
    req.userId = decoded.id;
    next(); 

};

module.exports = tokenVerification;