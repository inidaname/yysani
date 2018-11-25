declare const $: any;
declare const url = "https://api.adp.ng/";
declare let fullName: NodeListOf<any>;
declare class Change {
    private action?;
    constructor(action?: string);
    newAc(): Promise<boolean>;
    home(): void;
    about(): void;
    volunteer(): void;
}
declare const start: Change;
