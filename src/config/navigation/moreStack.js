import AppIcon from 'src/utils/Icon';

const moreStack = () => {
  return {
    stack: {
      children: [
        {
          component: {
            name: 'More',
            options: {
              bottomTab: {
                title: 'More',
                icon: AppIcon.get('ios-more')
              }
            }
          }
        }
      ]
    }
  }
};

export default moreStack;