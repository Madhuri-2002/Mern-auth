export const errorHandler = (statusCode,msg) => {
    const error = new Error()
    error.message = msg
    error.statusCode = statusCode
    return error
}