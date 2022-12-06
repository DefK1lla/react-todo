import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import uniqid from "uniqid";

import { selectProjects } from "../store/projectsReducer";
import { addTask, selectTasks } from "../store/tasksReducer";

import H1 from "../components/ui/H1";
import Button from "../components/ui/Button";
import Modal from "../components/Modal";
import TaskForm from "../components/TaskForm";

export default function Project() {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(selectProjects).items.find(prj => prj.id === id);
  const tasks = useSelector(selectTasks).items.filter(tsk => tsk.projectId = id);

  const handleSubmit = (data) => {
    if (data.id) {

    } else {
      data.projectId = id;
      data.id = uniqid();
      data.completed = false;
      data.status = "queue";
      dispatch(addTask(data));
    }

    console.log(data)
  };

  const handleAddTaskClick = (e) => {
    setTask(null);
    setOpen(true);
  };

  return (
    <>
      <H1>
        {project.name}
      </H1>

      <Button
        onClick={handleAddTaskClick}
        centered
      >
        Add task
      </Button>

      <Modal
        open={open}
        setOpen={setOpen}
      >
        {
          task
            ? <div>test</div>
            : <TaskForm
              onSubmit={handleSubmit}
              task={task}
            />
        }
      </Modal>
    </>
  );
};