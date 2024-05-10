// Purpose: Contains the Threads component, which is the main page for the application. This component displays the user's name and a list of their tasks. The user can add a new task, delete a task, and log out.

import { useEffect, useState } from "react";
import { useForumUserContext } from "../../app/providers/ForumUserProvider";
import { Thread } from "../../common/types/thread";
import { myUser } from "../../common/types/myUser";
import { createThread, getThreads } from "../../app/services/threadsApi";

const Threads = () => {
        const {forumUser} = useForumUserContext();

        const [thread, setThread] = useState<Thread>();
        const [threads, setThreads] = useState<Thread[]>([]);

        const [comment, setComment] = useState<string>('');
        const [comments, setComments] = useState<string[]>([]);

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
                        await createThread(thread as Thread);
                        setThread({title: ''});
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
                        <h1>Threads</h1>
                        {threads.map((thread, index) => (
                                <div key={index}>
                                        <h2>Thread Title: {thread.title}</h2>
                                        <p>Description: {thread.content}</p>
                                        <h4>By: {thread.user?.username}</h4>
                                        <input
                                                type="text"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                        />
                                        <br />
                                        <button onClick={addComment}>Add Comment</button>
                                </div>
                                ))}
                        <br />
                        <br />
                        <input
                                type="text"
                                value={thread?.title}
                                onChange={(e) => setThread({title: e.target.value, user: forumUser})}
                        />
                        <br />
                        <button onClick={addThread}>Add Thread</button>
                </div>
        )
}

export default Threads;