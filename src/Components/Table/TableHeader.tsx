import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.thead`
    background-color: #f2f2f2;
`;

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableHeader>{children}</StyledTableHeader>;
};
