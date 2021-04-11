export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(index: number): boolean {
    return (
      this.data[index].toLocaleLowerCase() >
      this.data[index + 1].toLocaleLowerCase()
    );
  }

  swap(index: number): void {
    //converting the string array into character array
    const charatersArray = this.data.split("");

    const temp = charatersArray[index];
    charatersArray[index] = charatersArray[index + 1];
    charatersArray[index + 1] = temp;

    this.data = charatersArray.join("");
  }
}
