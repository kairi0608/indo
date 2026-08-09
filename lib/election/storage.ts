import {Election,VotingSession} from "@/types/election";
export const ELECTION_KEY="mock-election:v1"; export const SESSION_KEY="mock-election:session:v1";
export const readElection=():Election|null=>{if(typeof window==="undefined")return null;try{return JSON.parse(localStorage.getItem(ELECTION_KEY)||"null")}catch{return null}};
export const writeElection=(e:Election)=>{localStorage.setItem(ELECTION_KEY,JSON.stringify(e));window.dispatchEvent(new Event("election-change"))};
export const readSession=():VotingSession|null=>{if(typeof window==="undefined")return null;try{return JSON.parse(sessionStorage.getItem(SESSION_KEY)||"null")}catch{return null}};
export const writeSession=(s:VotingSession)=>sessionStorage.setItem(SESSION_KEY,JSON.stringify(s));
export const freshSession=():VotingSession=>({id:crypto.randomUUID(),phase:"READY",hasCast:false});
export const clearAll=()=>{localStorage.removeItem(ELECTION_KEY);sessionStorage.removeItem(SESSION_KEY);window.dispatchEvent(new Event("election-change"))};
