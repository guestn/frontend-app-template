import { BareFetcher } from 'swr';
import axios from 'axios';
import { env } from '@/utils/env';

export const BACKEND_API_ROOT = env.VITE_BACKEND_API_URL;

export const backendFetcher: BareFetcher<any> = async (options) => {
  const res = await axios({ baseURL: BACKEND_API_ROOT, ...options });
  return res.data;
};
