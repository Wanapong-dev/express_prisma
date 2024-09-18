const createError = (statusCode,message) => {
    const eror = new Error(message)
    error.statusCode = statusCode;

    throw error;
    
}

module.exports = createError