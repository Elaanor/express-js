const errorHandler = (err,req,res,next) =>{
    console.log();
    res.status(500).send(err.errorMessage)
}

module.exports = errorHandler;