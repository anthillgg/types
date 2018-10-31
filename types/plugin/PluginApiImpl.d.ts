import { PluginApi, MessageCommandCallback } from "./PluginApi";
export declare class PluginApiImpl implements PluginApi {
    private _dependencies;
    constructor(deps: string[]);
    readonly dependencies: Object;
    registerMessageTrigger(triggers: string | string[], callback: MessageCommandCallback): boolean;
    registerMessageCommand(commands: string | string[], callback: MessageCommandCallback): void;
}
