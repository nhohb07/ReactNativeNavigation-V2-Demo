import { colors } from 'src/config';
import AppIcon from 'src/utils/Icon';

const calculatorStack = () => {
  return {
    stack: {
      children: [
        {
          component: {
            name: 'Calculator',
            options: {
              bottomTab: {
                title: 'Calculator',
                icon: AppIcon.get('ios-calculator'),
              },
              bottomTabs: {
                textColor: colors.text,
                selectedTextColor: colors.redMain,
                backgroundColor: colors.mainTabBar.background,
                hideShadow: true,
                drawUnder: false
              }
            },
            children: [
              {
                component: {
                  name: 'CalculatorTest',
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default calculatorStack;