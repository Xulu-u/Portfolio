import { useEffect, useState } from "react";
import { useForumUserContext } from "../../app/providers/ForumUserProvider";
import { Thread } from "../../common/types/thread";
import { Comment } from "../../common/types/comment";
import { createComment, createThread, getCommentsByThreadId, getThreads, updateThread } from "../../app/services/threadsApi";

const Threads = () => {
        const {forumUser} = useForumUserContext();

        const [threads, setThreads] = useState<Thread[]>([]);
        //const [comments, setComments] = useState<Comment[]>([]);

        const [title, setTitle] = useState<string>('');
        const [description, setDescription] = useState<string>('');

        const [comments, setComments] = useState({} as {[key: string]: string});
        //^^This way, each thread has its own comment in the comments state, and typing in one input field won't affect the others.

        const handleGetThreads = async () => {
                try {
                        const fetchedThreads = await getThreads();
                        setThreads(fetchedThreads as Thread[]);
                } catch (error) {
                        console.error("Error fetching threads:", error);
                }
        }

        const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>, threadId: string) => {
                setComments({...comments, [threadId]: e.target.value});
        };

        const addThread = async () => {
                try {
                        await createThread({title: title, description: description, user: forumUser, date: Date.now()} as Thread);
                        setTitle('');
                        setDescription('');
                        handleGetThreads();
                } catch (error) {
                        console.error("Error creating thread:", error);
                }};
        
        const addComment = async (threadId: string) => {
                try {
                        if (forumUser) {
                                await createComment(threadId, {content: comments[threadId], user: forumUser, date: Date.now()} as Comment);
                                setComments({...comments, [threadId]: ''});
                                await updateThread(threadId, {comments: await getCommentsByThreadId(threadId)} as Thread);
                                handleGetThreads();
                        }
                } catch (error) {
                        console.error("Error creating comment:", error);
                }
        };

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
                                        <h4>By: {thread.user?.username} | At: {thread.date ? new Date(thread.date).toLocaleString() : 'N/A'}</h4>
                                        <h4>Comments:</h4> 
                                        {thread.comments?.map((comment, index) => (
                                                <div key={index}>
                                                        <p>{comment.content} - By: {comment.user?.username} | At: {comment.date ? new Date(comment.date).toLocaleString() : 'N/A'}</p>
                                                </div>
                                        ))}
                                        <br />
                                        <input
                                                type="text"
                                                placeholder="Comment..."
                                                value={comments[thread.id || -1] || ''}
                                                onChange={(e) => handleCommentChange(e, thread.id ||'')}
                                        />
                                        <button onClick={() => addComment(thread.id || '')}>Add Comment</button>
                                </div>
                                ))}
                </div>
        )
}

export default Threads;