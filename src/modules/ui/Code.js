/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Code = ({ children }) => {
  return (
    <pre sx={{ display: "inline-block", whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
      <Box
        as="code"
        sx={{
          color: "codeText",
          bg: "codeBG",
          fontSize: 3,
          fontWeight: 600,
          fontFamily: "monospace",
          p: 1,
          px: 2,
          mt: 0,
          borderRadius: "4px",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </pre>
  );
};

export default Code;
