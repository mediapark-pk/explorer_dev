import { RawBalanceVolume } from '@app/common';

// tslint:disable: no-magic-numbers
export const getBalanceVolumeMock = (count: number) => {
  const mockData: RawBalanceVolume[] = [];
  for (let i = 0; i < count; i++) {
    mockData.push({
      t: Date.now() - (count - i - 1) * 200000000,
      y: Math.abs((i > 0 ? mockData[i - 1].y : 20) + Math.random() * 2 - 1)
    });
  }
  return mockData;
};
