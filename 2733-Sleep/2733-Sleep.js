// Last updated: 5/27/2026, 8:31:11 PM
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    function callback(resolve, reject){
        setTimeout(resolve, millis);
    }
    return new Promise(callback);
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */