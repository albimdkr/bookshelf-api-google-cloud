const successRes = ({ messageRes = '', dataRes = {} }) => ({
    status: 'success',
    message: messageRes,
    data: dataRes,
});

const failRes = ({ messageRes = '', dataRes = {}, therIsData = true }) => {
    if (therIsData) {
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

const errorRes = (messageRes = '') => ({
    status: 'error',
    message: messageRes,
});

module.exports = {
    successRes,
    failRes,
    errorRes
};


