'use client'
import Chart from "../src/components/Chart";
import { Container, RightSide } from "../styles/home/home.styles"
import Card from "../src/components/Card"
import DateInput from "@/src/components/DateInput";
import SearchBar from "@/src/components/SearchBar";
import TableNavbar from "@/src/components/TableNavbar";
import TableContainer from "@/src/components/TableContainer";
import TableDetails from "@/src/components/TableDetails";
import TableLine from "@/src/components/TableLine";
import AppTemplate from "@/src/components/AppTemplate";

const cardData = [
  {
    title: "Saldo a pagar",
    value: "R$ 120,55",
  },
  {
    title: "Saldo a receber",
    value: "R$ 120,55",
  },
  {
    title: "Saldo total",
    value: "R$ 120,55",
  },
];

const teste = [
  {
    title: "Título 1",
    description: "descrição 1",
  },
  {
    title: "Título 2",
    description: "descrição 2",
  },
  {
    title: "Título 3",
    description: "descrição 3",
  },
];

const Home = () => (
  <Container>
    {/*  <Chart/>
    <RightSide>
      {cardData.map(card =>(
        <Card key={card.title} title={card.title} value={card.value} />
      ))} 

      <button>Download</button> 
    </RightSide> */}
    <TableContainer>
      <TableDetails>
        {teste.map(test => <TableLine key={test.title} title={test.title} description={test.description} />
        )}
      </TableDetails>  
    </TableContainer>
  </Container>
);

export default Home;
