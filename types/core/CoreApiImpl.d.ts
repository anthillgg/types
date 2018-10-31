import { CoreApi, CoreApiData } from "./CoreApi";
export default class CoreApiImpl implements CoreApi {
    private _data;
    constructor();
    readonly data: CoreApiData;
    updateData(update: {
        [key: string]: any;
    }): CoreApiData;
}
