export const CONSTANTS = {
    SOCKET: {
        PROTOCOL: process.env.BACKEND_WS_PROTOCOL || 'ws',
        HOST: process.env.BACKEND_WS_HOST || '127.0.0.1',
        PORT: Number(process.env.BACKEND_WS_PORT) || 7008
    },
    VIEW: {
        LAST_BLOCKS_LIMIT: 10,
        ROWS_PER_PAGE_OPTIONS: [10, 25, 50]
    },
    MONEY: {
        MULTIPLIER: 100_000_000,
        TO_FIXED_AMOUNT: 1,
        TO_FIXED_FEE_COUNT: 8,
        TO_FIXED_LOG_COUNT: 4
    }
};
