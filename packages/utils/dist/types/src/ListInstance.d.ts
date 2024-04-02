import { EventsCollect } from './eventsCollect';
declare enum ListInstanceStatus {
    succeed = "succeed",
    failed = "failed",
    loading = "loading"
}
declare const listDataDefault: {
    searchParams: {};
    pageParams: {
        pageIndex: number;
        pageSize: number;
    };
    pageSizes: number[];
    list: never[];
    total: number;
    totalPage: number;
    getListStatus: ListInstanceStatus;
    searchStatus: ListInstanceStatus;
    pagingStatus: ListInstanceStatus;
};
export type ListStateType = typeof listDataDefault;
type RequestFunType = (data: unknown) => Promise<{
    list: [];
    total: number;
    totalPage: number;
}>;
export declare class ListInstance {
    listState?: ListStateType;
    requestFun?: RequestFunType;
    events: EventsCollect;
    constructor({ requestFun, listState }: {
        requestFun: RequestFunType;
        listState?: ListStateType;
    });
    setListState: (listState?: ListStateType) => any;
    getList: () => Promise<unknown>;
    handleSearch: () => Promise<unknown>;
    handlePageChange: ({ pageIndex, pageSize }: {
        pageIndex: number;
        pageSize: number;
    }) => Promise<unknown>;
}
export {};
//# sourceMappingURL=ListInstance.d.ts.map