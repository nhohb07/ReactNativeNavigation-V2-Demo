import AppIcon from 'src/utils/Icon';

const dealStack = () => {
  return {
    stack: {
      children: [
        {
          component: {
            name: 'Deal',
            options: {
              bottomTab: {
                title: 'Active Deal',
                icon: AppIcon.get('ios-paper-outline')
              }
            },
            children: [
              {
                component: {
                  name: 'ActiveDeal',
                }
              },
              {
                component: {
                  name: 'NewDeal',
                }
              },
            ]
          }
        },
      ]
    }
  }
};

export default dealStack;