// Purpose: Contains the Threads component, which is the main page for the application. This component displays the user's name and a list of their tasks. The user can add a new task, delete a task, and log out.

import { useEffect, useState } from "react";
import { useForumUserContext } from "../../app/providers/ForumUserProvider";
import { Thread } from "../../common/types/thread";
import { myUser } from "../../common/types/myUser";
import { createThread, getThreads } from "../../app/services/threadsApi";

const Threads = () => {
        const {forumUser} = useForumUserContext();

        const [threads, setThreads] = useState<Thread[]>([]);
        const [comments, setComments] = useState<string[]>([]);

        const [title, setTitle] = useState<string>('');
        const [description, setDescription] = useState<string>('');
        const [comment, setComment] = useState<string>('');
        

        const handleGetThreads = async () => {
                try {
                        const fetchedThreads = await getThreads();
                        setThreads(fetchedThreads as Thread[]);
                } catch (error) {
                        console.error("Error fetching threads:", error);
                }
        }

        const addThread = async () => {
                try {
                        await createThread({title: title, description: description, user: forumUser, date: Date.now()} as Thread);
                        setTitle('');
                        setDescription('');
                        getThreads();
                } catch (error) {
                        console.error("Error creating task:", error);
                }};
        
                const addComment = async () => {};

        useEffect(() => {
                handleGetThreads();
        }, []);

        return(
                <div>
                        <h2>Add new thread</h2>
                        <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                        />
                        <br />
                        <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                        />
                        <br />
                        <button onClick={addThread}>Add Thread</button>
                        <br />
                        <br />
                        <h1>Threads</h1>
                        {threads.map((thread, index) => (
                                <div key={index}>
                                        <h2>Thread Title: {thread.title}</h2>
                                        <p>Description: {thread.description}</p>
                                        <h4>By: {thread.user?.username}</h4>
                                        <h4>At: {thread.date ? new Date(thread.date).toLocaleString() : 'N/A'}</h4> 
                                        <input
                                                type="text"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                        />
                                        <br />
                                        <button onClick={addComment}>Add Comment</button>
                                </div>
                                ))}
                </div>
        )
}

export default Threads;