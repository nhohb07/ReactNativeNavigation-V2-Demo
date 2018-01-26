import AppIcon from 'src/utils/Icon';

const invoiceStack = () => {
  return {
    stack: {
      children: [
        {
          component: {
            name: 'Invoice',
            options: {
              bottomTab: {
                title: 'Invoice History',
                icon: AppIcon.get('ios-options-outline')
              }
            }
          }
        }
      ]
    }
  }
};

export default invoiceStack;