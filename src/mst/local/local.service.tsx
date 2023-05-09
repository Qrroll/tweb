
class LocalStorageService {
    static getData(key: string): any {
        // @ts-ignore
        return JSON.parse(localStorage.getItem(key));
    }

    static saveData(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static removeData(key: string): void {
        localStorage.removeItem(key);
    }
}
export default LocalStorageService