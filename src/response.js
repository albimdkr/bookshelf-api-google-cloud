const successResponse = ({ messageRes = '', dataRes = {} }) => ({
    status: 'success',
    message: messageRes,
    data: dataRes,
});

const failResponse = ({ messageRes = '', dataRes = {}, withData = true }) => {
    if (withData) {
        return {
            status: 'fail',
            message: messageRes,
            data: dataRes,
        };
    }

    return {
        status: 'fail',
        message: messageRes,
    };
};

const errorResponse = (messageRes = '') => ({
    status: 'error',
    message: messageRes,
});

module.exports = {
    successResponse,
    failResponse,
    errorResponse
};


