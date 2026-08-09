import {Election,VotingSession} from "@/types/election";
export const canVote=(e:Election|null)=>e?.status==="POLLING";
export function castVote(e:Election,s:VotingSession,candidateId:string){if(!canVote(e)||s.hasCast||s.phase==="CAST"||s.phase==="COMPLETE")return null;if(!e.candidates.some(c=>c.id===candidateId))return null;return {election:{...e,votes:[...e.votes,{id:crypto.randomUUID(),candidateId,castAt:new Date().toISOString()}]},session:{...s,selectedCandidateId:candidateId,hasCast:true,phase:"COMPLETE" as const}}}
