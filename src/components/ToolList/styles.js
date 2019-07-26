import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: '100%';
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;

  .notFound {
    font-weight: 800;
    font-style: italic;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
  }
`;

export const Tool = styled.div`
  border-radius: 5px;
  border-width: 1px;
  border-color: var(--LightInk);
  border-style: solid;
  margin-bottom: 20px;
  background: var(--White);
  display: flex;
  flex-direction: column;
  flex: 1;
  width: '100%';

  .btn-link {
    margin-top: 10px;
    padding: 0;
  }

  .text {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;

    .highlight {
      background-color: var(--Yellow);
    }
  }
`;
