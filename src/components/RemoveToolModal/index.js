import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from 'reactstrap';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import Loading from '../Loading';

export default function RemoveToolModal({
  modal,
  handleToggleModalRemove,
  handleSearch,
  tool,
}) {
  const tools = useSelector(state => state.tools);

  const dispatch = useDispatch();

  const handleSuccess = () => {
    handleToggleModalRemove([]);
    handleSearch('');
  };

  const submitForm = event => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(ToolsActions.removeRequest(tool.id));

    setTimeout(() => {
      handleSuccess();
    }, 2000);
  };

  return (
    <Modal isOpen={modal} toggle={handleToggleModalRemove}>
      {tools.loading && <Loading />}
      <Form onSubmit={e => submitForm(e)}>
        <ModalHeader>
          <i className="fa fa-close" /> Remove tool
        </ModalHeader>
        <ModalBody>
          {tools.successRemove && (
            <Alert color="success">
              {tool.title} was removed with success.
            </Alert>
          )}
          Are you sure you want to remove {tool.title}?
          {!!tools.error && (
            <Alert color="danger">
              Oops something went wrong :( Please contact your administrator.
            </Alert>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleToggleModalRemove}>
            Cancel
          </Button>{' '}
          <Button id="removeButton" color="primary">
            Yes, remove
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}

RemoveToolModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  handleToggleModalRemove: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  tool: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  tools: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    loading: PropTypes.bool,
    error: PropTypes.string,
    successRemove: PropTypes.bool,
  }).isRequired,
};
