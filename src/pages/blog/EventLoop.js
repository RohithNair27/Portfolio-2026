import React from "react";

const EventLoop = () => {
  return (
    <article className="blog-post">
      <header>
        <h1>Event Loop</h1>
        <div className="post-meta">
          <span>June 2025 </span>
          <span className="separator">|</span>
          <span> JavaScript</span>
        </div>
      </header>
      <p>
        JavaScript does not wait for anyone; it executes everything in one go.
        Hence, if we want JavaScript to wait for something, it cannot do that on
        its own. However, some tasks require <strong>something</strong> to store
        the event and execute it whenever JavaScript is free. This is where the
        <strong> Event Loop</strong> comes into play, acting as a bridge between
        asynchronous tasks and the main execution thread. It ensures that while
        a task waits in the background, the rest of your code keeps running
        smoothly.
      </p>
      <img
        src="/images/event_loop/javascript_icon.png"
        alt="JavaScript Event Loop"
        style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }}
      />

      <h2>So what is the Event Loop?</h2>
      <p>
        Let's start with an example. We added an event listener to our
        multi-million dollar website (Todo app, of course). When the JS engine
        sees a <code>setTimeout</code> or an event listener, it uses the{" "}
        <strong>Web API environment</strong> and stores the callback function
        there.
      </p>
      <h3>Example</h3>
      <pre>
        <code>{`console.log("Start")

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});

console.log("End")`}</code>
      </pre>
      <h3>Execution Steps:</h3>
      <p>
        Here, the event listener is actually waiting to be called. Whenever a
        user clicks on a button, the function is taken from the Web API
        environment to the <strong>callback queue</strong>.
      </p>
      <p>
        The Event Loop's only job is to continuously monitor both the Callback
        Queue and the Call Stack to see if the stack is empty.
      </p>
      <p>It does these three things:</p>
      <ol>
        <li>Is the Call Stack empty?</li>
        <li>If yes, is there a function ready in the Callback Queue?</li>
        <li>
          If both conditions are true, push that function into the Call Stack.
        </li>
      </ol>

      <h2>Why do we need a Callback Queue?</h2>
      <p>
        If a user clicks a button 100 times, those 100 callback functions need
        to be stored somewhere so they can be executed one by one in the order
        they occurred.
      </p>
      <blockquote>
        <strong>Important Note:</strong> The Event Loop will only take tasks
        from the Callback Queue or Microtask Queue once the whole global code
        execution is finished (the stack is empty). If there are too many tasks,
        it might take time to get to them.
      </blockquote>
      <h2>The Microtask Queue (Priority)</h2>
      <p>
        If we already have a callback queue, why do we need a new one? Let's
        understand this with an example. There are some tasks that are more
        important than the rest and should be given more priority. The{" "}
        <code>fetch()</code> function works a little differently than an event
        handler. Because fetching data is considered very important, it is given
        higher priority than other callback functions. Hence, it is stored in
        the <strong>Microtask queue</strong>.
      </p>
      <p>The Event Loop priority order:</p>
      <ul>
        <li>Call Stack (synchronous code)</li>
        <li>Microtask Queue (Promises, fetch callbacks)</li>
        <li>Callback Queue (setTimeout, setInterval, DOM events)</li>
      </ul>

      <pre>
        <code>{`// fetch is stored in Microtask queue.
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
`}</code>
      </pre>
      <h3>What goes where?</h3>
      <p>Here are the common tasks and their respective storage locations:</p>
      <p>
        <strong>Microtask queue:</strong>
      </p>
      <ul>
        <li>
          Promises (<code>.then</code>, <code>.catch</code>,{" "}
          <code>.finally</code>)
        </li>
        <li>Mutation Observers</li>
        <li>
          <code>async/await</code> (The code after an await)
        </li>
      </ul>
      <p>
        <strong>Callback Queue (Task Queue):</strong>
      </p>
      <ul>
        <li>
          <code>setTimeout()</code> / <code>setInterval()</code>
        </li>
        <li>DOM events (clicks, scrolls, keypresses)</li>
        <li>
          <code>setImmediate()</code> (in Node.js)
        </li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        Love it or hate it, the engineering behind the JavaScript runtime is
        mind-blowing. There is a reason it remains the most popular language in
        the world. The Event Loop is a fundamental concept that every developer
        should understand to avoid performance bottlenecks and bugs. You can
        read more about this in-depth on the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model">
          MDN Web Docs.
        </a>
      </p>
    </article>
  );
};

export default EventLoop;
