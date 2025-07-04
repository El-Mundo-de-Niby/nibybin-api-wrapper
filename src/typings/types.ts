
export type CodeData = {
   description?: string;
   title?: string;
   id: string;
   code: string;
   language: string;
   url: string;
};

export type UploadCodeOptions = {
   title?: string;
   description?: string;
   language?: string;
   code: string;
};
