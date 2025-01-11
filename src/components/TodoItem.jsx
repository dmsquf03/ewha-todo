import PropTypes from "prop-types";

const TodoItem = ({ todo, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(todo.id);
  };
  return (
    <div className="flex items-center justify-between gap-4 h-8 text-sm">
      <div className="flex items-center gap-2">
        <input
          onChange={onChangeCheckbox}
          checked={todo.isDone}
          className="w-5 h-5"
          type="checkbox"
        />
        <div className="text-lg">{todo.content}</div>
      </div>
      <div className="text-gray-600">{todo.date}</div>
      <button className="border rounded-3xl px-4 h-full bg-neutral-300 text-white text-xs">
        삭제
      </button>
    </div>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
