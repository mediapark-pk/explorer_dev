import { ILocation } from 'src/interface';

export interface IDelegate {
  approval: number;
  forgedBlocks: number;
  missedBlocks: number;
  publicKey: string;
  username: string;
  votes: number;
  confirmedVoteCount: number;
  location?: ILocation;
}
