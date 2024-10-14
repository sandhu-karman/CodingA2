// src/Components/Table/Table.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

// Define component metadata
const meta: Meta = {
    title: 'Components/Table',
    component: Table,
};

export default meta;

// Create a template for the stories
const Template: StoryFn = (args) => (
    <Table {...args}>
        <TableHeader>
            <TableRow>
                <TableCell>Header 1</TableCell>
                <TableCell>Header 2</TableCell>
            </TableRow>
        </TableHeader>
        <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
        </TableRow>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={2}>Footer Content</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
);

// Export the default story
export const Default = Template.bind({});
Default.args = {};
