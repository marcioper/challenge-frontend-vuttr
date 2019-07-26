import React, { useState } from 'react';
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
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import Loading from '../Loading';

export default function AddToolModal({
  modal,
  handleToggleModalAdd,
  handleSearch,
}) {
  const [tool, setTool] = useState({
    title: '',
    link: '',
    description: '',
    tags: '',
  });
  const [validate, setValidate] = useState({
    titleState: false,
    linkState: false,
    descriptionState: false,
    tagsState: false,
  });
  const tools = useSelector(state => state.tools);
  const dispatch = useDispatch();

  const validateForm = () => {
    validate.titleState = !!tool.title;
    validate.linkState = !!tool.link;
    validate.descriptionState = !!tool.description;
    validate.tagsState = !!tool.tags;
    setValidate(validate);
  };

  const handleAddToolApi = async () => {
    if (typeof tool.tags === 'string') {
      tool.tags = tool.tags.split(' ');
    }

    dispatch(ToolsActions.addRequest(tool));
    setTool({
      title: '',
      link: '',
      description: '',
      tags: '',
    });
    setValidate({
      titleState: false,
      linkState: false,
      descriptionState: false,
      tagsState: false,
    });
    handleToggleModalAdd();
    handleSearch('');
  };

  const submitForm = event => {
    validateForm(event);
    event.preventDefault();
    event.stopPropagation();

    if (
      validate.titleState &&
      validate.linkState &&
      validate.descriptionState &&
      validate.tagsState
    ) {
      handleAddToolApi();
    }
  };

  return (
    <Modal isOpen={modal} toggle={handleToggleModalAdd}>
      {tools.loading && <Loading />}
      <Form id="toolForm" onSubmit={e => submitForm(e)}>
        <ModalHeader toggle={handleToggleModalAdd}>
          <i className="fa fa-plus" /> Add new tool
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Tool Name</Label>
            <Input
              name="title"
              type="text"
              placeholder="name..."
              value={tool.title}
              valid={validate.titleState}
              invalid={!validate.titleState}
              onChange={e => {
                setTool({ ...tool, title: e.target.value });
                validateForm(e);
              }}
            />
            <FormFeedback>This field is required</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="title">Tool Link</Label>
            <Input
              name="link"
              type="text"
              placeholder="link..."
              value={tool.link}
              valid={validate.linkState}
              invalid={!validate.linkState}
              onChange={e => {
                setTool({ ...tool, link: e.target.value });
                validateForm(e);
              }}
            />
            <FormFeedback>This field is required</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="title">Tool description</Label>
            <Input
              name="description"
              type="textarea"
              placeholder="description..."
              value={tool.description}
              valid={validate.descriptionState}
              invalid={!validate.descriptionState}
              onChange={e => {
                setTool({ ...tool, description: e.target.value });
                validateForm(e);
              }}
            />
            <FormFeedback>This field is required</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="title">Tags</Label>
            <Input
              name="tags"
              type="text"
              placeholder="tags..."
              value={tool.tags}
              valid={validate.tagsState}
              invalid={!validate.tagsState}
              onChange={e => {
                setTool({ ...tool, tags: e.target.value });
                validateForm(e);
              }}
            />
            <FormFeedback>This field is required</FormFeedback>
          </FormGroup>
          {!!tools.error && <Alert color="danger">{tools.error}</Alert>}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Add tool</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}

AddToolModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  handleToggleModalAdd: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
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
  }).isRequired,
};
