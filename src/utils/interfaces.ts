import { FormEvent } from "react";

export interface AppInterface {
  manager: string;
  players: string[];
  balance: string;
  enterAmount: string;
  message?: string;
  winner?: string;
}

export interface EnterFormInt {
  changeValue: (data: string) => void;
  value: string;
  enterHandler: (e: FormEvent) => void;
}
