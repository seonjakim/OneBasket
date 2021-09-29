import React from 'react';
import { Box, Layer, Toast } from 'gestalt';

const ToastMessage = ({ message }: { message: string }) => {
  return (
    <Layer>
      <Box
        dangerouslySetInlineStyle={{
          __style: {
            bottom: 50,
            left: '50%',
            transform: 'translateX(-50%)',
          },
        }}
        fit
        paddingX={1}
        position="fixed"
      >
        <Toast text={message} />
      </Box>
    </Layer>
  );
};

export default ToastMessage;
