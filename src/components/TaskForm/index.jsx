import styles from "./styles.module.scss";

import React from "react";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import uniqid from "uniqid";

import { S3 } from "@aws-sdk/client-s3";

import H2 from "../ui/H2";
import H3 from "../ui/H3";
import Textfield from "../ui/Textfield";
import Filefield from "../ui/Filefield";
import Button from "../ui/Button";
import RemoveButton from "../ui/RemoveButton";


const config = {
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  }
};

const client = new S3(config);

export default function TaskForm({ onSubmit, task }) {
  const [name, setName] = React.useState(task?.name ?? "");
  const [subtasks, setSubtasks] = React.useState(task?.subtasks ?? []);
  const [files, setFiles] = React.useState(task?.files ?? []);
  const [description, setDescription] = React.useState(task?.description ?? "");
  const [error, setError] = React.useState(false);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      autofocus: true,
      placeholder: "Enter task description...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return setError(true);

    const data = {
      ...task,
      name,
      description,
      subtasks,
      files,
    };

    onSubmit(data);
  };

  const handleNameChange = (e) => {
    if (error) setError(false);
    setName(e.target.value);
  };

  const handleDescrChange = React.useCallback((value) => {
    setDescription(value)
  }, []);

  const handleAddSubtask = (e) => {
    setSubtasks(prevState => [...prevState, { id: uniqid(), name: "", completed: false }]);
  };

  const handleSubtaskChange = (index) => (e) => {
    const newState = [...subtasks];
    newState[index].name = e.target.value;
    setSubtasks(newState);
  };

  const handleRemoveSubtask = (index) => (e) => {
    setSubtasks(prevState => [...prevState.splice(0, index), ...prevState.splice(index + 1)]);
  };

  const handleFileChange = (index) => async (file) => {
    const fileName = Date.now() + "-" + file.name;
    const fileSrc = process.env.REACT_APP_AWS_BUCKET_URL + fileName;

    const uploadParams = {
      Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
      Body: file,
      Key: fileName,
      ContentType: file.type,
      ACL: "public-read",
      ContentDisposition: "attachment"
    };

    await client.putObject(uploadParams);

    const newState = [...files];
    newState[index].name = file.name;
    newState[index].src = fileSrc;
    setFiles(newState);
  };

  const handleAddFile = (e) => {
    setFiles(prevState => [...prevState, { id: uniqid(), name: "" }]);
  };

  const handleRemoveFile = (index) => (e) => {
    setFiles(prevState => [...prevState.splice(0, index), ...prevState.splice(index + 1)]);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <H2>
        Fill the form
      </H2>

      <Textfield
        placeholder="Enter task name..."
        error={error}
        value={name}
        onChange={handleNameChange}
      />

      <SimpleMDE
        className={styles.mdEditor}
        value={description}
        onChange={handleDescrChange}
        options={options}
      />

      {
        <div
          className={styles.inputs}
        >
          <H3>
            Subtasks
          </H3>

          {
            subtasks.map((task, index) =>
              <div
                className={styles.input}
                key={task.id}
              >
                <Textfield
                  placeholder="Enter task name"
                  value={task.name}
                  onChange={handleSubtaskChange(index)}
                />
                <RemoveButton
                  onClick={handleRemoveSubtask(index)}
                />
              </div>
            )
          }

          <Button
            type="button"
            onClick={handleAddSubtask}
          >
            Add subtask
          </Button>
        </div>
      }

      <div
        className={styles.inputs}
      >
        <H3>
          Files
        </H3>

        {
          files.map((file, index) =>

            <div
              className={styles.input}
              key={file.id}
            >
              <Filefield
                onChange={handleFileChange(index)}
              />
              <RemoveButton
                onClick={handleRemoveFile(index)}
              />
            </div>
          )
        }

        <Button
          type="button"
          onClick={handleAddFile}
        >
          Add file
        </Button>
      </div>

      <Button
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};