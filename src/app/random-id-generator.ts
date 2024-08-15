export class RandomIdGenerator{

  private characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private charactersLength: number = this.characters.length;

  private idLength: number = 10;

  public GenerateRandomId(): string{

    let result = '';

    for (let i = 0; i < this.idLength; i++){

      let newCharIndex = Math.floor((Math.random() * this.charactersLength));

      result += this.characters.charAt(newCharIndex);
    }

    return result;
  }
}
