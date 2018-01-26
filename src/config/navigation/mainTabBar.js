import calculatorStack from './calculatorStack';
import dealStack from './dealStack';
import invoiceStack from './invoiceStack';
import compareStack from './compareStack';
import moreStack from './moreStack';

const mainTabBar = () => ({
  children: [
    calculatorStack(),
    dealStack(),
    invoiceStack(),
    compareStack(),
    moreStack(),
  ]
});

export default mainTabBar;