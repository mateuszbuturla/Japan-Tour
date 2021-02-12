import { store } from 'react-notifications-component';

const AddNotification = (
  title: string,
  message: string,
  type: 'success' | 'danger' | 'info' | 'default' | 'warning',
) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export default AddNotification;
