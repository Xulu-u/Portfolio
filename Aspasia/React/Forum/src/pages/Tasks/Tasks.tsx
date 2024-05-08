import { useEffect, useState } from 'react';
import { useUserIDContext } from '../../app/providers/UserProvider';
import { Task, myUser } from '../../common/types/myUser';
import { getTasksByUserId, getUserById, createTask, deleteTask } from '../../app/services/usersApi';

const Tasks = () => {
        const [user, setUser] = useState<User>();
        const {userID} = useUserIDContext();

        const [task, setTask] = useState<Task>();
        const [tasks, setTasks] = useState<Task[]>([]);

        const getUserData = async () => {
                try {
                        const fetchedUser = await getUserById(userID);
                        setUser(fetchedUser as User);
                } catch (error) {
                        console.error("Error fetching user:", error);
                        // Handle error appropriately (e.g., display error message)
                }
                };

        const getTasks = async () => {
                try {
                        const fetchedTasks = await getTasksByUserId(userID);
                        setTasks(fetchedTasks as Task[]);
                } catch (error) {
                        console.error("Error fetching tasks:", error);
                }
                };

        useEffect(() => {
                getUserData();
                getTasks();
        }, [userID]);

        const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setTask({ name: event.target.value});
        };

        const handleTaskAdd = async () => {
                try {
                        await createTask(userID, task as Task);
                        setTask({name: ''});
                        getTasks();
                } catch (error) {
                        console.error("Error creating task:", error);
                }
        };
        const handleTaskDelete = async (taskId: string) => {
                try {
                        await deleteTask(userID, taskId);
                        setTask({name: ''});
                        getTasks();
                } catch (error) {
                        console.error("Error deleting task:", error);
                }
        };

        return(
                <div>
                        <h1>Tasks</h1>
                        {user ? (<h2>Welcome {user.name}</h2>) : (<h2>Loading...</h2>)}
                        {
                                tasks.map(task => (
                                        <div>
                                                <h2 key={task.id}>{task.name}</h2>
                                                <button onClick={() => {handleTaskDelete(task.id||'')}}>Delete Task</button>
                                        </div>
                                ))
                        }
                        <input
                                type="text"
                                id="task"
                                onChange={handleTaskChange}
                                value={task?.name}
                        />

                        <button onClick={handleTaskAdd}>Add Task</button>
                </div>
        )
}

export default Tasks;