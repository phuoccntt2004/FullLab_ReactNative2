export class Validate{
    static image(path: string){
        return path.startsWith('http') || path.startsWith('https');
    }
}