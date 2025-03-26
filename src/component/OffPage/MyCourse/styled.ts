import styled from "styled-components";
export const StyledMyCourse = styled.div<any>`
  @media (max-width: 800px) {
    .table-course {
      margin: 0 15px;
    }
  }
  margin-top: 50px;
  width: 100%;
  .title-my-course {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 10px;
    color: #fff;
  }
  .table-course {
    background-color: #fafafa;
    padding: 10px;
    border-radius: 8px;
  }
  .ant-table-wrapper .ant-table-tbody > tr > td {
    border-bottom: 4px solid #f0f0f0 !important;
  }
  .ant-table-wrapper .ant-table-pagination.ant-pagination {
    display: none;
  }
  .rowClassName1 td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .rowClassName1 td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .box-logout {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    .btn-logout {
      border-radius: 13px;
      background-color: #3493fa;
      border: 1px solid transparent;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-size: 0.97em;
      font-weight: bolder;
      letter-spacing: 0.03em;
      line-height: 2.4em;

      margin-top: 10px;
      max-width: 100%;
      min-height: 2.5em;
      padding: 0 1.2em;
      position: relative;
      text-align: center;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-shadow: none;
      text-transform: uppercase;
      transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
        opacity 0.3s, color 0.3s;
      vertical-align: middle;
    }
  }
  .ant-table-wrapper .ant-table-thead > tr > th {
    border-radius: 8px;
  }
  .ant-table-wrapper .ant-table-tbody > tr.ant-table-placeholder {
    border-radius: 8px;
  }
  .ant-table-row {
    background-color: #e9e9e9;
    border-radius: 8px;
  }
`;
