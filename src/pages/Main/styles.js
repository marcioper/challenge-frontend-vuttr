import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;

  .topo {
    padding-left: 15px;
  }

  .row {
    display: flex;
    flex: 1;
    width: 100%;
    margin: 0;
  }

  .form {
    padding-top: 40px;
  }

  .btnAdd {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .fontAwesome {
    font-family: FontAwesome, sans-serif;
  }

  .check {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
