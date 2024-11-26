import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = ({ data, columns }) => (
  <DataTable value={data} paginator rows={10}>
    {columns.map((col, i) => (
      <Column key={i} field={col.field} header={col.header} />
    ))}
  </DataTable>
);

export default Table;