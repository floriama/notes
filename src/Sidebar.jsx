import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #fafafa;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  padding-left: 50px;
`;

const FileEntry = styled.div`
  color: ${props => props.isSelected ? 'blue' : 'black'};
  font-size: 18px;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const Sidebar = (props) => {
  const { files, onFileClick, currentId } = props;

  return (
    <SidebarContainer>
      {files.map(file =>
        <FileEntry key={file.id} isSelected={file.id === currentId} data-id={file.id} onClick={e => onFileClick(e)}>
          {file.name}
        </FileEntry>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;