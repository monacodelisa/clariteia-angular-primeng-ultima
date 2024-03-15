export interface Project {
    id?: number;
    name?: string;
    dueDate?: string;
    lastModified?: string;
    client?: Client;
    role?: string;
    status?: string;
    stage?: string;
}

export interface Client {
  id?: number;
  name?: string;
}
