import AppIcon from 'src/utils/Icon';

const compareStack = () => {
  return {
    stack: {
      children: [
        {
          component: {
            name: 'Compare',
            options: {
              bottomTab: {
                title: 'Compare',
                icon: AppIcon.get('ios-git-compare')
              }
            }
          }
        }
      ]
    }
  }
};

export default compareStack;