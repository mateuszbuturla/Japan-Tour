import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { StyledRichTextEditorWrapper } from './StyledRichTextEditor';

interface Props {
  editorState: any;
  onEditorStateChange: any;
  toolbar: any;
}

function RichTextEditor({ editorState, onEditorStateChange, toolbar }: Props) {
  return (
    <StyledRichTextEditorWrapper>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbar}
      />
    </StyledRichTextEditorWrapper>
  );
}

export default RichTextEditor;
