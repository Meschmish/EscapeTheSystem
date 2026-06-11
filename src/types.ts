export interface Item {
  id: number;
  item: string;
  description: string;
  image: string;
}

export interface Room {
  id: number;
  roomName: string;
  roomPath: string;
  unsolvedInstruction: string;
  solvedInstruction: string;
  unsolvedImage: string;
  solvedImage: string;
  hint: string;
  itemToSolve: string;
  itemToAdd: string | null;
}