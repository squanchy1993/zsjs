import { deepClone } from './deepClone';
import { deepMerge } from './deepMerge'
import { EventsCollect } from './eventsCollect'

enum ListInstanceStatus { succeed = 'succeed', failed = 'failed', loading = 'loading' }

const listDataDefault = {
  searchParams: {},
  pageParams: {
    pageIndex: 1,
    pageSize: 10
  },
  pageSizes: [10, 30, 50],
  list: [],
  total: 0,
  totalPage: 0,
  // status
  getListStatus: ListInstanceStatus.succeed, // succeed, failed, loading;
  searchStatus: ListInstanceStatus.succeed, // succeed failed, loading;
  pagingStatus: ListInstanceStatus.succeed  // succeed failed, loading;
}

export type ListStateType = typeof listDataDefault;

type RequestFunType = (data: unknown) => Promise<{ list: [], total: number, totalPage: number }>;
export class ListInstance {

  listState?: ListStateType;

  // 请求函数
  requestFun?: RequestFunType;

  // events
  events: EventsCollect = new EventsCollect(["changeState"]);

  constructor({ requestFun, listState }: { requestFun: RequestFunType, listState?: ListStateType }) {
    this.listState = this.setListState(listState)

    if (requestFun) {
      this.requestFun = requestFun;
    }
  }

  setListState = (listState?: ListStateType) => {
    let handler = {
      set: function (target: ListStateType, prop: keyof ListStateType, value: any) {
        Reflect.set(target, prop, value)
        const data: ListStateType = deepClone(target);
        this.events.dispatchEvent("changeState", data)
        return true;
      }
    };
    const listStateData = deepMerge(listDataDefault, listState)
    return new Proxy(listStateData, handler)
  }

  getList = () => {
    return new Promise((resolve, reject) => {
      if (this.listState!.getListStatus === ListInstanceStatus.loading) {
        reject(new Error('加载中,请稍等'));
        // 此处或者可以取消上次加载的内容
      }
      this.listState!.getListStatus = ListInstanceStatus.loading;
      const params = { ...this.listState!.searchParams, page: this.listState!.pageParams };
      this.requestFun!(params)
        .then((res) => {
          const { list, total, totalPage = 0 } = res;
          this.listState!.totalPage = totalPage;
          this.listState!.total = total;
          this.listState!.list = list;
          this.listState!.getListStatus = ListInstanceStatus.succeed;

          resolve(res);
        })
        .catch((error) => {
          console.error(error);
          this.listState!.getListStatus = ListInstanceStatus.failed;
          reject(error)
        });
    });
  };

  handleSearch = async () => {
    this.listState!.searchStatus = ListInstanceStatus.loading;
    this.listState!.pageParams.pageIndex = 1;
    try {
      const res = await this.getList();
      this.listState!.searchStatus = ListInstanceStatus.succeed;
      return res
    } catch (error) {
      console.error('search get error:' + error);
      this.listState!.searchStatus = ListInstanceStatus.failed;
    }
  };

  handlePageChange = async ({ pageIndex, pageSize }: { pageIndex: number, pageSize: number }) => {
    this.listState!.pagingStatus = ListInstanceStatus.loading;
    if (pageIndex) {
      this.listState!.pageParams.pageIndex = pageIndex;
    }

    if (pageSize) {
      this.listState!.pageParams.pageSize = pageSize;
    }

    try {
      const res = await this.getList();
      this.listState!.pagingStatus = ListInstanceStatus.succeed;
      return res
    } catch (error) {
      console.error('search get error:' + error);
      this.listState!.pagingStatus = ListInstanceStatus.failed;
    }
  };
}
