import ReactDataGrid from '@inovua/reactdatagrid-community';
import React, { useCallback, useState } from 'react';
import '@inovua/reactdatagrid-community/index.css'

export default function Datagrid() {

        const columns = [
        { name: 'id', header: 'Id', defaultVisible: false, minWidth: 300, type: 'number' },
        { name: 'name', header: 'Name', defaultFlex: 1, minWidth: 250 },
        // { name: 'country', header: 'Country', defaultFlex: 1, minWidth: 100, render: ({ value })=> flags[value] ? flags[value]: value },
        // { name: 'city', header: 'City', defaultFlex: 1, minWidth: 300 },
        { name: 'age', header: 'Age', minWidth: 150, type: 'number' ,editable: false ,sortable: false}
      ];
        const gridStyle = { minHeight: 550 }
   
      
      const people = [
        { id: 1, name: 'John McQueen', age: 35 },
        { id: 2, name: 'Mary Stones', age: 25 },
        { id: 3, name: 'Robert Fil', age: 27 },
        { id: 4, name: 'Roger Robson', age: 81 },
        { id: 5, name: 'Billary Konwik', age: 18 },
        { id: 6, name: 'Bob Martin', age: 18 },
        { id: 7, name: 'Matthew Richardson', age: 54 },
        { id: 8, name: 'Ritchie Peterson', age: 54 },
        { id: 9, name: 'Bryan Martin', age: 40 },
        { id: 10, name: 'Mark Martin', age: 44 },
        { id: 11, name: 'Michelle Sebastian', age: 24 },
        { id: 12, name: 'Michelle Sullivan', age: 61 },
        { id: 13, name: 'Jordan Bike', age: 16 },
        { id: 14, name: 'Nelson Ford', age: 34 },
        { id: 15, name: 'Tim Cheap', age: 3 },
        { id: 16, name: 'Robert Carlson', age: 31 },
        { id: 17, name: 'Johny Perterson', age: 40 }
      ]

      const [dataSource, setDataSource] = useState(people);

      const onEditComplete = useCallback(({ value, columnId, rowId }) => {
        const data = [...dataSource];
        data[rowId-1][columnId] = value;
    
        setDataSource(data);
      }, [dataSource])
      const [selected, setSelected] = useState({ 2: true, 5: true });

      const onSelectionChange = useCallback(({ selected }) => {
        setSelected(selected)
      }, [])

    return  <ReactDataGrid
                    idProperty="id"
                    style={gridStyle}
                    selected={selected}
                    onEditComplete={onEditComplete}
                    editable={true}
                    columns={columns}
                    pagination
                    dataSource={dataSource}
                    defaultLimit={10}
                    checkboxColumn
                    onSelectionChange={onSelectionChange}
                />;
}
