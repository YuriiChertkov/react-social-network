import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withLoginRedirect } from "../../hoc/LoginRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoginRedirect
)(Dialogs);
