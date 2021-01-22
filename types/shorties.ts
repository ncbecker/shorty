export type Shorty = {
  createdAt: Date;
  lastAccessAt: Date;
  views: number;
  id: string;
  target: string;
};

export type NewShorty = Omit<Shorty, "createdAt" | "lastAccessAt" | "views">;
