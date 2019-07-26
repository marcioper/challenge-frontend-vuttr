import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Alert, Row, Col, Form, Input, Label, Button } from 'reactstrap';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container } from './styles';

import Loading from '../../components/Loading';
import ToolList from '../../components/ToolList';
import AddToolModal from '../../components/AddToolModal';
import RemoveToolModal from '../../components/RemoveToolModal';

export default function Main() {
  const [toolSearchTextInput, setToolSearchTextInput] = useState('');
  const [toolSearchCheckInput, setToolSearchCheckInput] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [tool, setTool] = useState({});
  const tools = useSelector(state => state.tools);

  const dispatch = useDispatch();

  const handleSearch = useCallback(() => {
    if (toolSearchTextInput === '' || toolSearchTextInput.length >= 3) {
      dispatch(
        ToolsActions.getRequest(toolSearchTextInput, toolSearchCheckInput)
      );
    }
  }, [dispatch, toolSearchCheckInput, toolSearchTextInput]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const handleToggleModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const handleToggleModalRemove = objTool => {
    let toolObj = objTool;
    if (!toolObj) {
      toolObj = {
        id: 0,
        title: '',
        link: '',
        description: '',
        tags: '',
      };
    }
    setModalRemove(!modalRemove);
    setTool(toolObj);
  };

  return (
    <Container>
      {tools.loading && <Loading />}
      <AddToolModal
        modal={modalAdd}
        handleToggleModalAdd={handleToggleModalAdd}
        handleSearch={handleSearch}
      />
      <RemoveToolModal
        modal={modalRemove}
        handleToggleModalRemove={handleToggleModalRemove}
        handleSearch={handleSearch}
        tool={tool}
      />
      <Row>
        <Col xs="12" md="2">
          {' '}
        </Col>
        <Col xs="12" md="8">
          <h1 className="topo">VUTTR</h1>
          <h2 className="topo">Very Useful Tools to Remember</h2>
          <Form className="form">
            <Row>
              <Col xs="6" sm="4">
                <Input
                  type="text"
                  name="search"
                  className="fontAwesome"
                  placeholder="&#xF002; Search"
                  value={toolSearchTextInput}
                  onChange={e => {
                    setToolSearchTextInput(e.target.value);
                    handleSearch();
                  }}
                />
              </Col>
              <Col xs="6" sm="4" className="check">
                <Label check>
                  <Input
                    type="checkbox"
                    name="search-check"
                    id="toolSearchCheckID"
                    onChange={e => {
                      setToolSearchCheckInput(e.target.checked);
                      handleSearch();
                    }}
                  />{' '}
                  Search in tags only
                </Label>
              </Col>
              <Col xs="12" sm="4" className="btnAdd">
                <Button
                  color="primary"
                  id="addToolModal"
                  className="fontAwesome"
                  onClick={handleToggleModalAdd}
                >
                  &#xf067; Add
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col xs="12">
              {!!tools.error && (
                <div>
                  <br />
                  <Alert color="danger">{tools.error}</Alert>
                </div>
              )}
              <ToolList
                tools={tools.data}
                toolSearchTextInput={toolSearchTextInput}
                toolSearchCheckInput={toolSearchCheckInput}
                handleToggleModalRemove={handleToggleModalRemove}
              />
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="2">
          {' '}
        </Col>
      </Row>
    </Container>
  );
}
