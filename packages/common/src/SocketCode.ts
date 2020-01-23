export enum SocketCode {
    GET_ACCOUNT = 'GET_ACCOUNT',
    GET_ACCOUNTS = 'GET_ACCOUNTS',
    GET_ACCOUNT_BALANCE = 'GET_ACCOUNT_BALANCE',
    GET_ACCOUNTS_BLOCKCHAIN_INFO = 'GET_ACCOUNTS_BLOCKCHAIN_INFO',
    ON_ACCOUNTS_BLOCKCHAIN_INFO_UPDATE = 'ON_ACCOUNTS_BLOCKCHAIN_INFO_UPDATE',
    GET_ACCOUNT_STATISTIC = 'GET_ACCOUNT_STATISTIC',

    GET_BLOCKS = 'GET_BLOCKS',
    GET_BLOCK = 'GET_BLOCK',
    GET_BLOCK_BLOCKCHAIN_INFO = 'GET_BLOCK_BLOCKCHAIN_INFO',
    ON_BLOCK_BLOCKCHAIN_INFO_UPDATE = 'ON_BLOCK_BLOCKCHAIN_INFO_UPDATE',


    GET_DELEGATES = 'GET_DELEGATES',
    GET_TOP_DELEGATES = 'GET_TOP_DELEGATES',
    GET_DELEGATE_SUMMARY = 'GET_DELEGATE_SUMMARY',
    GET_DELEGATES_SUMMARY = 'GET_DELEGATES_SUMMARY',
    GET_DELEGATE_VOTES = 'GET_DELEGATE_VOTES',
    GET_DELEGATE_FORGED_BLOCKS = 'GET_DELEGATE_FORGED_BLOCKS',
    GET_DELEGATE_BALANCE_VOLUME = 'GET_DELEGATE_BALANCE_VOLUME',

    ADD_DELEGATE_TO_FAVORITES = 'ADD_DELEGATE_TO_FAVORITES',

    ON_DELEGATE_SUMMARY_UPDATE = 'ON_DELEGATE_SUMMARY_UPDATE',
    ON_DELEGATES_SUMMARY_UPDATE = 'ON_DELEGATES_SUMMARY_UPDATE',

    GET_TRANSACTIONS = 'GET_TRANSACTIONS',
    GET_TRANSACTION = 'GET_TRANSACTION',
    GET_TRANSACTIONS_BY_BLOCK_ID = 'GET_TRANSACTIONS_BY_BLOCK_ID',
    GET_TRANSACTIONS_BLOCKCHAIN_INFO = 'GET_TRANSACTIONS_BLOCKCHAIN_INFO',
    ON_TRANSACTIONS_BLOCKCHAIN_INFO_UPDATE = 'ON_TRANSACTIONS_BLOCKCHAIN_INFO_UPDATE',

    GET_BLOCKCHAIN_INFO = 'GET_BLOCKCHAIN_INFO',
    ON_BLOCKCHAIN_INFO_UPDATE = 'ON_BLOCKCHAIN_INFO_UPDATE',

    GET_CURRENCIES = 'GET_CURRENCIES',
    GET_DDK_MARKET_DATA = 'GET_DDK_MARKET_DATA',
    GET_DDK_MARKET_CAP = 'GET_DDK_MARKET_CAP',
    GET_CAPITALIZATION_CHART_DATA = 'GET_CAPITALIZATION_CHART_DATA',

    GET_VOTES = 'GET_VOTES',
}
