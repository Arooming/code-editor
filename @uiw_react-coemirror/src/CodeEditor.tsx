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
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("// code");

  // 나중에 state로 만들어서 유동적으로 바뀌게 할 예정
  const LANGUAGE = "kotlin";

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

  const getExtensions = (language: keyof typeof LANG_LIST) => {
    const langSupport = LANG_LIST[language];
    return langSupport ? [langSupport()] : [];
  };

  const extensions = getExtensions(LANGUAGE);

  const handleChangeCode = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <CodeMirror
      value={code}
      onChange={handleChangeCode}
      extensions={extensions}
    />
  );
};

export default CodeEditor;
