import React, { useEffect, useState } from "react";
import {
  ButtonDestroy,
  ButtonEdit,
  Input,
  Label,
  TaskItemDiv,
  SpanTime,
  SpanLabel, ButtonPlay, ButtonStop, SpanTracker
} from "./task-style";
import "../../style.css";
import { formatDistanceToNow } from "date-fns";

const Task = ({ done, label, id, time, changeTask, onDeleted }) => {
  const emptyItem = {
    done: done,
    label: label,
    id: id,
    time: time,
    tracker: 0,
    canEdit: false,
    play: false
  };
  const [item, setItem] = useState(emptyItem);

  useEffect(() => {
    let intervalId;
    if (item.play && !item.done) {
      intervalId = setInterval(() => {
        setItem(prev => prev.tracker += 1);

      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [item.play, item.tracker]);

  const getTimeFormat = (time) => {
    let min = Math.floor(time / 60);
    let sec = time - min * 60;
    return ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
  };

  const onChangeCheckBox = (event) => {
    let newItem = { ...item };
    newItem.done = !item.done;
    changeTask(newItem, () => {
        setItem(prev => {
          prev.done = !prev.done;
          prev.play = false;
        });
      }
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let newItem = { ...item };
    newItem.label = item.label;
    changeTask(newItem, () => {
        setItem(prev => prev.canEdit = !prev.canEdit);
      }
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <TaskItemDiv
        done={done}
        children={
          <>
            <Input
              type="checkbox"
              checked={done}
              onChange={onChangeCheckBox}
            />
            <Label>

              {item.canEdit ? (
                <input
                  value={item.label}
                  onChange={(e) => {
                    setItem(prev => prev.label = e.target.value);
                  }}
                />
              ) : (
                <SpanLabel> {label}</SpanLabel>
              )}
              <SpanTracker>
                <ButtonPlay type={"button"} onClick={() => {
                  setItem(prev => prev.play = true);
                }}
                            disabled={item.canEdit} />
                <ButtonStop type={"button"} onClick={() => {
                  setItem(prev => prev.play = false);
                }} />
                {getTimeFormat(item.tracker)}
              </SpanTracker>
              <SpanTime>{formatDistanceToNow(item.time)} ago</SpanTime>
            </Label>

            <ButtonEdit
              type={"button"}
              onClick={(e) => {
                setItem(prev => {
                  prev.play = false;
                  prev.canEdit = true;
                });
              }}
            />
            <ButtonDestroy type={"button"} onClick={onDeleted} />
          </>
        }
      />
    </form>
  );
};

Task.defaultProps = {
  id: 0,
  label: "Do it",
  time: new Date(),
  done: false,
  canEdit: false
};
export { Task };
