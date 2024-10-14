import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export interface TableProps {
    children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => {
    return <StyledTable>{children}</StyledTable>;
};
