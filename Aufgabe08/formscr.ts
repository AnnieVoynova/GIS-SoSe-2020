namespace Aufgabe08 {
    let button: HTMLButtonElement; //= document.getElementById("button");
    button = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", handleSend);

    //functions
    function handleSend(): void {
        getResponse("https://testgissomse2020.herokuapp.com/");
    }
    async function getResponse(_url: RequestInfo): Promise<void> {
     
    }

}