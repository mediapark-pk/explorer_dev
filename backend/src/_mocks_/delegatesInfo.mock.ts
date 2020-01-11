import { IDelegatesInfo } from 'src/interface';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
} from 'src/_mocks_/utils';

const delegatesInfoFactory = Factory.Sync.makeFactory<IDelegatesInfo>({
  allCount: Factory.each(i => getRandomNumber(100, 3000)),
  activeCount: Factory.each(i => getRandomNumber(100, 1000)),
  standbyCount: Factory.each(i => getRandomNumber(100, 300)),
  voteThreshold: Factory.each(i => getRandomNumber(100, 1000)),
  voteFreeztime: Factory.each(i => getRandomNumber(6048000, 14515200000)),
  stakeFreeztime: Factory.each(i => getRandomNumber(6048000, 14515200000)),
});

export const getDelegateInfoMock = () => delegatesInfoFactory.build();
