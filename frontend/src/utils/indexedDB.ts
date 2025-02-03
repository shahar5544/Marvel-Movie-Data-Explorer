export const openDB = (dbName: string, version: number) => {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};
