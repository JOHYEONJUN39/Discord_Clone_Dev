import { DocumentData } from "firebase/firestore";

export interface Channel {
  id: string;
  channel: DocumentData;
}