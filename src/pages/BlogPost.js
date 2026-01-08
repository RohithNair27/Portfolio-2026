import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import DockerModelRunner from "./blog/DockerModelRunner";
import EventLoop from "./blog/EventLoop";
import SecureCoding from "./blog/SecureCoding";

const BlogPost = () => {
  const { slug } = useParams();

  const blogComponents = {
    "docker-model-runner": DockerModelRunner,
    eventLoop: EventLoop,
    secureCoding: SecureCoding,
  };

  const BlogComponent = blogComponents[slug];

  if (!BlogComponent) {
    return (
      <Layout>
        <div style={{ marginBottom: "2rem" }}>
          <Link
            to="/blog"
            style={{
              textDecoration: "none",
              borderBottom: "1px solid currentColor",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
        <h1>Post not found</h1>
        <p>The requested blog post could not be found.</p>
      </Layout>
    );
  }

  // Render the blog component but extract its content to maintain consistent layout
  return (
    <Layout>
      {/* <div style={{ marginBottom: '2rem' }}>
        <Link to="/blog" style={{ textDecoration: 'none', borderBottom: '1px solid currentColor' }}>
          ← Back to Blog
        </Link>
      </div> */}
      <BlogComponent />
    </Layout>
  );
};

export default BlogPost;
