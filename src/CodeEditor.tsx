
import "codemirror/lib/codemirror.css";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/fold/foldgutter.css";
import { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("// code");

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: 100,
      }}
    >
      <div style={{ width: 10, flex: "10px 0 0" }} />
      <div style={{ flex: "1 1" }}>
        <CodeMirror
          value={code}
          options={{
            mode: "xml",
            theme: "monokai",
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            console.log(code)
            setCode(value);
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
