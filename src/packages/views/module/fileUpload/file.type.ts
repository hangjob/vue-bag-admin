interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    size:number,
    url?: string;
    preview?: string;
    originFileObj?: any;
    file: string | Blob;
}

export {
    FileItem
}