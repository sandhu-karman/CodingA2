
import React from 'react';
import styled from 'styled-components';

const StyledTableFooter = styled.tfoot`
    background-color: #f2f2f2;
`;

export const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableFooter>{children}</StyledTableFooter>;
};
