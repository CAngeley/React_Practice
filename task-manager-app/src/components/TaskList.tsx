import { Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import React from 'react';

type Task = {

    id: number;
    name: string;
    completed: boolean;
  };

interface TaskListProps {
    tasks: Task[];
    handleToggleComplete: (id: number) => void;
    handleRemoveTask: (id: number) => void;
    handleEditTask: (id: number, name: string) => void;
}


const TaskList: React.FC<TaskListProps> = ({
    tasks,
    handleToggleComplete,
    handleRemoveTask,
    handleEditTask,
  }) => (
    <List sx={{ marginTop: 2 }}>
      {tasks.map((task) => (
        <ListItem key={task.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            checked={task.completed}
            onChange={() => handleToggleComplete(task.id)}
            sx={{ marginRight: 2}}
          />
          <ListItemText primary={task.name} sx={{color:"black"}}/>
          <Button
            variant="outlined"
            onClick={() => handleEditTask(task.id, task.name)}
            sx={{ marginRight: 2, '&:hover':{ borderColor: '#4CAF50', color: '#4CAF50', transition: 'all 0.3s ease'} }}
          >
            Edit
          </Button>
          <Button variant="outlined" color="error" onClick={() => handleRemoveTask(task.id)} sx={{'&:hover': {borderColor: '#FF6347', color: '#FF6347', backgroundColor: '#FFEBEB', transition: 'all 0.3s ease'}}}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );

export default TaskList;