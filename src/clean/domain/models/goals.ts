export enum GoalsStatus {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED'
}

export interface Goals {
  name: string;
  status: GoalsStatus;
  createdAt: Date;
  updatedAt: Date;
  finishAt: Date;
  description?: string;
  image?: string;
  amount?: number;
}