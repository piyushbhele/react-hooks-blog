import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "./firebase";

function PostDetail() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {

        firestore
            .collection('posts')
            .doc(postId)
            .get()
            .then((snapshot) => {

                console.log(snapshot.data())
                setPost(snapshot.data());
            })

    }, [postId])

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <h3>{post.subTitle}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;