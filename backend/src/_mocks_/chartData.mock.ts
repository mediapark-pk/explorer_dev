export const getChartDataMocks = (count: number) => {
  const mockData = [{
    t: Date.now(),
    y: 20,
  }];
  for (let i = 1; i < count; i++) {
    mockData.push({
      t: mockData[i - 1].t + Math.random() * 1000000000,
      y: Math.abs(mockData[i - 1].y + Math.random() * 2 - 1)
    });
  }
  return mockData;
};
