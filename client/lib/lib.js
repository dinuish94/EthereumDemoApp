/**
 * Created by dinuksha on 3/13/17.
 */

/**
 * creating a web3 instance and setting a provider
 */

//check if the web3 is available
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
