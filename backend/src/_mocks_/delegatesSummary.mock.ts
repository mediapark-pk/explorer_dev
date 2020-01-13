import { RawDelegatesSummary } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const delegatesSummaryFactory = Factory.Sync.makeFactory<RawDelegatesSummary>({
  allCount: Factory.each(i => getRandomNumber(100, 3000)),
  activeCount: Factory.each(i => getRandomNumber(100, 1000)),
  standbyCount: Factory.each(i => getRandomNumber(100, 300)),
  voteThreshold: Factory.each(i => getRandomNumber(100, 1000)),
  voteFreeztime: Factory.each(i => getRandomNumber(6048000, 14515200000)),
  stakeFreeztime: Factory.each(i => getRandomNumber(6048000, 14515200000)),
});

export const getDelegatesSummaryMock = () => delegatesSummaryFactory.build();
