
module.exports = async (job) => {
    console.log(job)
    return Promise.resolve({ done: true })
};