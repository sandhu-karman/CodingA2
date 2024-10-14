import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

test('renders table with rows and cells', () => {
    render(
        <Table>
            <TableRow>
                <TableCell>Cell 1</TableCell>
                <TableCell>Cell 2</TableCell>
            </TableRow>
        </Table>
    );
    expect(screen.getByText(/Cell 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Cell 2/i)).toBeInTheDocument();
});
