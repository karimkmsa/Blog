export const catchAsyncError = (apiFunction) => {
    return (req, res, next) => {
        apiFunction(req, res, next).catch(err => next(err))
    }

} 

export default catchAsyncError;