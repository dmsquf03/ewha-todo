import { useState, useRef } from "react";
import PropTypes from "prop-types";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  console.log(content);

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
  };

  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="flex justify-between h-24 pb-16 border-b text-sm">
      <input
        onChange={onChangeContent}
        value={content}
        className="w-9/12 border rounded p-2"
        placeholder="추가할 todo를 입력해주세요."
        ref={contentRef}
        onKeyDown={onKeyDown}
      />
      <button
        onClick={onSubmit}
        className="border rounded-3xl px-4 bg-blue-400 text-white"
      >
        추가
      </button>
    </div>
  );
};
Editor.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default Editor;
