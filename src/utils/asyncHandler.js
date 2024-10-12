const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req, res,  next)).catch((err) => next(err))
    }
 }




export {asyncHandler}





/*
try-catch  method
const asyncHandler = (fn) => async (error,req,res,next) => {
    try {
    } catch (error) {
     res.status(err.code || 500).json({
        success: false,
        message: err.message})}
    }
    */