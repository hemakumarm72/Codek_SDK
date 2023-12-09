export interface getProject {
  type: 'opened' | 'closed';
}

export interface getProjectWallet {
  type: 'opened' | 'closed';
  walletAddress: string;
}

export interface newAPI {
  ProjectId: string;
}

export declare type getProjectResponse = {
  username: string;
  title: string;
  projectId: string;
  type: 'opened' | 'closed';
  gitHubRepo: string;
  default_branch: string;
};
