//https://eth-ropsten.alchemyapi.io/v2/8uRb4Sy0PpW6YQUfhZBl3kqP2WV-OjKw

//a138c879e9ee94ccebfc059bb7778c896a6a649cf22b154b7adce43fbd89441d

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8uRb4Sy0PpW6YQUfhZBl3kqP2WV-OjKw',
      accounts: [
        'a138c879e9ee94ccebfc059bb7778c896a6a649cf22b154b7adce43fbd89441d',
      ],
    },
  },
};
