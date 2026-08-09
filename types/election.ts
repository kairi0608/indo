export type Candidate={id:string;name:string;symbol:string;description?:string;order:number};
export type ElectionStatus="SETUP"|"READY"|"POLLING"|"PAUSED"|"CLOSED"|"COUNTED";
export type Vote={id:string;candidateId:string;castAt:string};
export type Election={id:string;name:string;description?:string;status:ElectionStatus;candidates:Candidate[];votes:Vote[]};
export type VotingPhase="READY"|"VOTING"|"CONFIRMING"|"CAST"|"COMPLETE";
export type VotingSession={id:string;phase:VotingPhase;selectedCandidateId?:string;hasCast:boolean};
