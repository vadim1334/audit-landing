export type DelegationFactors = {
  emotional: string;
  resource: string;
  complexity: string;
};

export type Subtask = {
  title: string;
  tool: string | null;
  prompt: string | null;
};

export type Task = {
  title: string;
  factors: DelegationFactors;
  integration: string | null;
  deployment: string | null;
  rationale: string | null;
  risks: string | null;
  mitigation: string | null;
  requirements: string | null;
  subtasks: Subtask[];
};

export type AuditData = {
  tasks: Task[];
  meta: {
    source: string;
    totalSubtasks: number;
  };
};
