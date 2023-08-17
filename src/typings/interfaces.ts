import { CodeData, UploadCodeOptions } from "./types";

// Wrapper Constructor
export interface NibyBinAPIInterface {
   create(options: UploadCodeOptions): Promise<CodeData>;
   get(id: string): Promise<CodeData>;
}

