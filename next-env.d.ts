/// <reference types="next" />
/// <reference types="next/types/global" />
declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_URL: string;
    NEXT_PUBLIC_API_URL: string;
  }
}
