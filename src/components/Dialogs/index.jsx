import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { fetchInitDialogs } from "../../store/actions";
import { DialogItem } from './DialogItem';
import styles from './Dialogs.module.scss';

const Dialogs = ({ title, onClick }) => {
  const dispatch = useDispatch();
  const dialogs = useSelector((store) => store.dialogs);

  const initDialogs = React.useCallback(() => {
    dispatch(fetchInitDialogs());
  }, [dispatch]);

  React.useEffect(() => {
    initDialogs();
  }, []);

  return (
    <div className={styles.Dialog} onClick={onClick}>
      {title && <h2>{title}</h2>}
      {dialogs ? Object.keys(dialogs).map((key) => {
        return <DialogItem key={dialogs[key].chatID} name={key} dialog={dialogs[key]} />;
      }) : 'You have no dialogues'}
    </div>
  )
}

Dialogs.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.number),
}

Dialogs.defaultProps = {
  chats: [],
}

export default Dialogs;