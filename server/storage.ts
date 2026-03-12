import { type InsertContactMessage, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private messages: ContactMessage[] = [];
  private nextId = 1;

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: this.nextId++,
      ...message,
      createdAt: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
