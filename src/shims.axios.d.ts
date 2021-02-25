import { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    successNotice? : boolean,
    errorNotice? : boolean
  }
}
