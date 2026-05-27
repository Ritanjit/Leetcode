// Last updated: 5/27/2026, 11:28:28 PM
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise (async(res, rej) => {
        const sum = await Promise.all([promise1, promise2]);
        res(sum[0]+sum[1])
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */