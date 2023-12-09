import axios from 'axios';
import { API_URL } from './config/env';
import { getProject, getProjectResponse, getProjectWallet, newAPI } from './@types';

export class CodeK {
  private ProjectId: string;
  private baseUrl: string = API_URL;

  constructor(config: newAPI) {
    this.ProjectId = config.ProjectId;
    if (!this.ProjectId) throw new Error('project Id is null');
  }

  async getPullAll(input: getProject): Promise<getProjectResponse> {
    try {
      const result = await axios.get<getProjectResponse>(
        `${this.baseUrl}/project/search/${this.ProjectId}?type=${input.type}`,
      );
      return result.data;
    } catch (error) {
      throw new Error('Failed to fetch user.');
    }
  }

  async getPullByWallet(input: getProjectWallet): Promise<getProjectResponse> {
    try {
      const result = await axios.get<getProjectResponse>(
        `${this.baseUrl}/project/search/${this.ProjectId}/${input.walletAddress}/wallet?type=${input.type}`,
      );
      return result.data;
    } catch (error) {
      throw new Error('Failed to fetch user.');
    }
  }
}
