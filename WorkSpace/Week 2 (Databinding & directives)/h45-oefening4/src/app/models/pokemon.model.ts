export enum Type {
    Grass,
    Fire,
    Water,
}

export class Pokemon {
    private id: number;
    private name: string;
    private type: string;
    private imgUrl: string;
    

	constructor(id: number, name: string, type: Type, imgUrl: string) {
		this.id = id;
		this.name = name;
		this.type = Type[type];
		this.imgUrl = imgUrl;
    }

    getName(): string {
        return this.name;
    }
    
    getType(): string {
        return this.type;
    }

}