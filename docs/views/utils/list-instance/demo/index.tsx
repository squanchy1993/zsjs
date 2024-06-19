import * as React from "react";
import styled from "styled-components";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ListInstance, ListStateType } from "@zsjs/utils";
import { useOnMount, useOnUnmount, useOnUpdate } from "@zsjs/hooks";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .header {
    width: inherit;
    height: 60px;
    background-color: #007bff;
  }
  & > .body {
    width: inherit;
    flex: 1;
    .body-inner {
      height: calc(100% - 20px);
      width: 100%;
      margin: 10px 0%;
      display: flex;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 5px;
      .left,
      .right {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
      }
      .left {
        width: 40%;
      }
      .right {
        width: 60%;
      }
    }
  }
`;

const requestFun = async ({ page }: { page: { pageIndex: number; pageSize: number } }) => {
  let list = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page.pageIndex}&_limit=${page.pageSize}`)
    .then(response => response.json())
  return { list, total: 100, totalPage: 10 };
}

const listInstance = new ListInstance({
  requestFun
});

const Table: React.FC = () => {
  const [listState, setListState] = React.useState<ListStateType>({
    searchParams: {},
    pageParams: {
      pageIndex: 1,
      pageSize: 10,
    },
    pageSizes: [10, 30, 50],
    list: [],
    total: 0,
    totalPage: 0,
    // status
    getListStatus: "succeed", // succeed, failed, loading;
    searchStatus: "succeed", // succeed failed, loading;
    pagingStatus: "succeed", // succeed failed, loading;
  });

  const [rowCount, setRowCount] = React.useState(0)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'First name', width: 130 },
    { field: 'title', headerName: 'Last name', width: 130 },
    {
      field: 'body',
      headerName: 'body',
      width: 90,
    },
  ];

  useOnMount(() => {
    listInstance.addStateChangeListener((state: ListStateType) => {
      setListState((pre: any) => {
        Object.keys(pre).forEach((key) => {
          Reflect.set(pre, key, state[key]);
        });
        return { ...pre };
      });
    });
    listInstance.getList()
  })

  return (
    <Container>
      <div style={{ height: 400, width: '100%' }}>
        <p>{rowCount}</p>
        <DataGrid
          rows={listState.list}
          columns={columns}
          rowCount={listState.total}
          pagination
          paginationMode="server"
          onPaginationModelChange={(paginationModel) => {
            listInstance.handlePageChange({ pageIndex: paginationModel.page + 1, pageSize: paginationModel.pageSize })
          }}
          pageSizeOptions={[10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: listState.pageParams.pageSize, page: listState.pageParams.pageIndex - 1 } },
          }}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export default Table;