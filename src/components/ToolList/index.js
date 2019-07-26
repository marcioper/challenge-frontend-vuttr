import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button } from 'reactstrap';

import { Container, Tool } from './styles';

export default function ToolList({
  tools,
  handleToggleModalRemove,
  toolSearchTextInput,
  toolSearchCheckInput,
}) {
  return (
    <Container>
      {tools.length === 0 && (
        <Row>
          <Col xs="12" className="notFound">
            Not found.
          </Col>
        </Row>
      )}
      {tools.map(tool => (
        <div id="toolList" key={String(tool.id)} style={{ width: '100%' }}>
          <Tool>
            <Row>
              <Col xs="8">
                <Button
                  color="link"
                  title="Click Here"
                  onClick={() => window.open(tool.link, '_blank')}
                >
                  {tool.title}
                </Button>
              </Col>
              <Col xs="4">
                <Button
                  close
                  id="removeTool"
                  title="Remove"
                  onClick={handleToggleModalRemove.bind(this, tool)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="text">
                {tool.description}
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="text">
                {!!tool.tags &&
                  tool.tags.length > 0 &&
                  tool.tags.map((tag, index) => (
                    <span key={index}>
                      <strong
                        className={
                          tag === toolSearchTextInput && toolSearchCheckInput
                            ? 'highlight'
                            : ''
                        }
                      >
                        #{tag}
                      </strong>
                      &nbsp;
                    </span>
                  ))}
              </Col>
            </Row>
          </Tool>
        </div>
      ))}
    </Container>
  );
}

ToolList.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  handleToggleModalRemove: PropTypes.func.isRequired,
  toolSearchTextInput: PropTypes.string.isRequired,
  toolSearchCheckInput: PropTypes.bool.isRequired,
};
