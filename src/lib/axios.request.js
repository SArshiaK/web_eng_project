const axios = require('axios')

const payRequest= (options) =>  {
    return new Promise((resolve, reject) => {
        axios(options)
            .then(response => {
                resolve({data: response.data, verifyStatus: response.status});
            })
            .catch(function (error) {
                console.log(error)
                resolve({data: error?.response?.data ? error.response.data : error, verifyStatus: error?.response?.status ? error.response.status: error});
            });
    })
}

module.exports = {payRequest}