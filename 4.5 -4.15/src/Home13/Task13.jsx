import React, { useState } from "react";

const TaskInput = ({ onAddTask, selectedCategory }) => {
const [title, setTitle] = useState("");

const handleSubmit = (event) => {
event.preventDefault();
onAddTask({ title, category: selectedCategory, id: Date.now() });
setTitle("");
};

return (
<form onSubmit={handleSubmit}>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<button>Добавить задачу</button>
</form>
);
};

export default TaskInput