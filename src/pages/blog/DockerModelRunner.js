import React from "react";

const DockerModelRunner = () => {
  return (
    <article className="blog-post">
      <header className="animate-in">
        <h1>Docker Model Runner</h1>
        <div className="post-meta">
          <span>May 2025 </span>
          <span className="separator">|</span>
          <span> AI / Machine learning</span>
        </div>
      </header>

      <div className="animate-in">
        <p>
          My first laptop, an Acer Aspire, is basically a family heirloom at this
          point. It has been through the trenches with me for six years and
          survived everything from MATLAB to Android Studio (yes, that Android
          Studio), so I figured it could handle anything. Inspired by my friend
          running DeepSeek, I tried to host an LLM to become the next Sam Altman.
          Turns out, 6-year-old RAM has limits. 
        </p>
        
        <p> 
          However, I then came across a Docker-based setup that can run a more 
          optimized, quantized version of the model. With this, you can run models 
          on your system by using an image from Docker.
        </p>
      </div>

      <h2>What is Docker Model Runner?</h2>
      <p>
        Docker Model Runner is a feature in Docker Desktop that allows you to
        run Large Language Models (LLMs) locally using the same workflow you use
        for containers. It treats AI models as OCI artifacts, meaning you can
        pull and run them just like Docker images. The best part is that it
        connects directly to your computer's hardware (like your GPU) to make
        the model run much faster than it would inside a traditional virtual
        machine.
      </p>

      <div className="animate-in">
        <img
          src="/images/docker_model_runner/docker_logo.png"
          alt="Docker Model Runner"
          style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }}
        />
      </div>

      <h2>How to run an LLM model on your system</h2>
      <p>
        Below are the steps for how even you can run an LLM model on your system:
      </p>

      <ul>
        <li>First, make sure you have Docker installed on your system.</li>
        <li>Then, go to Docker settings and enable Docker Model Runner.</li>
      </ul>

      <div className="animate-in">
        <img
          src="/images/docker_model_runner/docker.png"
          alt="Docker Model Runner Settings"
          style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }}
        />
      </div>

      <ul>
        <li>Once this is done, open the terminal.</li>
        <li>Now run the command given below to pull the model image (I am using this as it is the smallest model I could find on Docker Hub).</li>
      </ul>

      <pre>
        <code>docker model pull ai/smollm2:135M-Q4_K_M</code>
      </pre>
      
      <ul>
        <li>It takes some time to download the image. Meanwhile, you can contemplate your life choices.</li>
      </ul>

      <div className="animate-in">
        <img
          src="/images/docker_model_runner/Model pulled successfully.png"
          alt="Model Pulled Successfully"
          style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }}
        />
      </div>

      <p>
        After this, using the command below, we can run the model locally in
        Docker:
      </p>

      <pre>
        <code>docker model run ai/smollm2:135M-Q4_K_M</code>
      </pre>

      <p>Now you can communicate with this model and have a great chat if you don't have friends :)</p>

      <div className="animate-in">
        <img
          src="/images/docker_model_runner/Chat.png"
          alt="Chat with Model"
          style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }}
        />
      </div>
      <h2>Conclusion</h2>

      {/* Added Funny Conclusion */}
      <p >
        And there you have it. My Acer Aspire is currently screaming like a jet engine, and 
        I’m pretty sure the bottom of the laptop is hot enough to fry an egg, but I’m 
        officially running local AI. 
      </p>
    </article>
  );
};

export default DockerModelRunner;