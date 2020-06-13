namespace Aufgabe07 {
    export interface Artikeln { 
        name: string;
        beschreibung: string;
        preis: number;
        category: string;
        photo: string;
    }
    export let artikel: Artikeln[];

    async function communicate (_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        artikel = await response.json();
        artikelnErstellen();
        }
    communicate("dateien.json");
}