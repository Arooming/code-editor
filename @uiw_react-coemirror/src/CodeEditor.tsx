import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { c, kotlin, scala } from "@codemirror/legacy-modes/mode/clike";
import { go } from "@codemirror/legacy-modes/mode/go";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { swift } from "@codemirror/legacy-modes/mode/swift";
import { csharp } from "@replit/codemirror-lang-csharp";
import { abcdef } from "@uiw/codemirror-theme-abcdef";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import styled from "styled-components";

const CodeEditor = () => {
  const [code, setCode] = useState("// code");

  // 나중에 state로 만들어서 유동적으로 바뀌게 할 예정
  const LANGUAGE = "javascript";

  // 상수 파일로 분리할 예정
  const LANG_LIST = {
    c: () => StreamLanguage.define(c),
    csharp: () => csharp(),
    scala: () => StreamLanguage.define(scala),
    kotlin: () => StreamLanguage.define(kotlin),
    java,
    javascript,
    python,
    cpp,
    go: () => StreamLanguage.define(go),
    swift: () => StreamLanguage.define(swift),
    ruby: () => StreamLanguage.define(ruby),
  };

  // extends에 항상 배열이 들어가도록 배열을 반환하는 함수
  const getExtensions = (language: keyof typeof LANG_LIST) => {
    // langSupport: 함수 반환
    const langSupport = LANG_LIST[language];
    return langSupport ? [langSupport()] : [];
  };

  const extensions = getExtensions(LANGUAGE);

  const handleChangeCode = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <CodeMirrorWrapper>
      <CodeMirror
        value={code}
        onChange={handleChangeCode}
        extensions={extensions}
        theme={abcdef}
        minHeight="500px"
      />
    </CodeMirrorWrapper>
  );
};

export default CodeEditor;

const CodeMirrorWrapper = styled.div`
  height: 500px;
  overflow: auto;
  font-size: 16px;

  // 코드 활성화
  .cm-activeLine {
    background-color: #1c1c1c;
  }

  .cm-gutters {
    background-color: transparent;
    color: #9a9a9a;
  }

  // line 활성화
  .cm-activeLineGutter {
    background-color: transparent;
  }

  // 커서
  .cm-cursor {
    border-left-color: white;
  }
`;
