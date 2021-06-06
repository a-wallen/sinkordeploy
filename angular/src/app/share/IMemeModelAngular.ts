interface IMemeModelAngular {
  memeId: string;
  userId: string;
  feedId: string;
  totalVotes: number;
  caption: string;
  timePost: Date;
  imageUrl: string; // FIXME: how to format
  reports: number;
}
export default IMemeModelAngular;
