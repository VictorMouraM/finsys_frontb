'use client'
import { ReactNode } from "react";
import { Container } from "./styles"
import TableNavbar from "../TableNavbar";

interface TableContainerprops {
  children: ReactNode;
}

const TableContainer = ({children}: TableContainerprops) => {
  return (
    <Container>
      <TableNavbar />
      {children}
    </Container>
  );
};

export default TableContainer;

