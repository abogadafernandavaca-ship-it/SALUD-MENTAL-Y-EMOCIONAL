
export interface ProtocolStep {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  details?: string[];
}

export interface MethodologyAxis {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Phase {
  time: string;
  title: string;
  description: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
