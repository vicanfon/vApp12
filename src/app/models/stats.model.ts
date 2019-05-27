export class Stats {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public nDetected: number, public nActivated: number, public nIntervened: number, public nDismissed: number, public nRejected: number, public avgSolvingTime: number, frequentFailureTypes: FrequentFailure[]){}
}
export interface Stats {
  nDetected: number;
  nActivated: number;
  nIntervened: number;
  nDismissed: number;
  nRejected: number;
  avgSolvingTime: number;
  frequentFailureTypes: FrequentFailure[];
  // frequentFailureTypes: object;
}

export class FrequentFailure{
  constructor(public code: string, public frequency: number){}
}
