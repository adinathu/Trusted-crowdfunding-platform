var config = {
  contractAddress: "KT1QB1PzTHkEAxFSYxaQaPrDkwtnvLxy9uvj", 

  get API_URL() {
    return `https://api.jakartanet.tzkt.io/v1/contracts/${this.contractAddress}`;
  },
  API_URL_Project: "https://api.jakartanet.tzkt.io/v1/contracts/",
};

export default config;