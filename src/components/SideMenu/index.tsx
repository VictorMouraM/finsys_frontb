import Link from 'next/link';
import Image from 'next/image';
import { Container, MenuItems } from "./styles";
import logo from "../../assets/logo.png"
import debit from "../../assets/debit.png"
import receipt from "../../assets/receipt.png"
import debitCategories from "../../assets/debitCategories.png"
import receiptCategories from "../../assets/receiptCategories.png"


const menuItems = [
    {
      href: '/Debit',
      src: debit,
      alt: 'debit'
    },
    {
      href: '/Receipt',
      src: receipt,
      alt:'receipt'
    },
    {
      href: '/DebitCategories',
      src: debitCategories,
      alt:'debitCategories'
    },
    {
      href: '/ReceiptCategories',
      src: receiptCategories,
      alt:'receiptCategories'
    },
]

const SideMenu = () => {
  return (
    <Container>
      <Link href="/">
        <Image src={logo} alt="Finsys" width={60} />
      </Link>
      <MenuItems>
        {menuItems.map((menuitem => (
            <Link key={menuitem.href} href={menuitem.href}>
              <Image src={menuitem.src} alt="Finsys" width={41} />
            </Link>
            )))}
      </MenuItems>
    </Container>
  );
};

export default SideMenu;