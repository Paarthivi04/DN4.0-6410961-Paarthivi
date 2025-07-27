import React from "react";
import Post from '../Components/Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const posts = data.map(
                    post => new Post(post.id, post.title, post.body)
                );
                this.setState({ posts });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error: " + error);
    }

    render() {
        const { posts, error } = this.state;
        if (error) {
            return <div>Error loading posts.</div>;
        }
        return (
            <div>
                <h2>Blog Posts</h2>
                {posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;