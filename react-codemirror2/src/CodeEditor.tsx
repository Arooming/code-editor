import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/keymap/sublime";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/material.css";
import "codemirror/theme/monokai.css";
import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [mode, _] = useState("javascript");

  const handleChangeCode = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <CodeMirror
      value={code}
      options={{
        mode: `${mode}`,
        theme: "monokai",
        lineWrapping: true,
        smartIndent: true,
        lineNumbers: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        autoCloseTags: true,
        keyMap: "sublime",
        matchBrackets: true,
        autoCloseBrackets: true,
        autofocus: true,
        extraKeys: {
          Tab: (cm) => cm.execCommand("indentAuto"),
          "Cmd-/": "toggleComment",
          "Ctrl-Space": "autocomplete",
        },
      }}
      onBeforeChange={(_, __, value) => handleChangeCode(value)}
      onChange={(_, __, value) => {
        console.log(value);
      }}
    />
  );
};

export default CodeEditor;
