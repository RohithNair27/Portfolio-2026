import React from 'react';

const EventLoop = () => {
  return (
    <article className="blog-post">
      <header>
        <h1>Event Loop</h1>
        <div className="post-meta">
          <span>June 2025 </span>
          <span className="separator">|</span>
          <span> Language</span>
        </div>
      </header>

      <p>
        The Call Stack does not wait for anyone; it executes everything in one go. Hence, if we want JavaScript (JS) to wait for something, it cannot do that on its own. To do more than this, JS needs help from the browser, and for this, the browser provides Web APIs.
      </p>

      <h2>Web APIs</h2>
      <p>All of these are not part of JavaScript; they are part of the Web APIs provided by the browser environment:</p>
      <ul>
        <li>setTimeout</li>
        <li>DOM APIs</li>
        <li>fetch()</li>
        <li>Local Storage</li>
        <li>Console</li>
        <li>Location</li>
      </ul>

      <p>
        All of these are available inside the global object (window). Because the window object is global, we can use these functionalities without using the window. prefix.
      </p>
      <ul>
        <li>Example: window.setTimeout() can just be written as setTimeout().</li>
      </ul>

      <h2>Event Loop & Callback Queue</h2>
      <p>
        When the JS engine sees a setTimeout or an event listener, it stores the callback function in the Web API environment.
      </p>

      <h3>Example Flow:</h3>
      <ul>
        <li>console.log("Start")</li>
        <li>document.getElementById("btn").addEventListener("click", function cb() {`{`} console.log("Callback"); {`}`});</li>
        <li>console.log("End")</li>
      </ul>

      <h3>Execution Steps:</h3>
      <ul>
        <li>JS executes console.log("Start") first.</li>
        <li>The callback function (cb) is registered and stored in the Web API environment.</li>
        <li>JS executes console.log("End").</li>
        <li>When a user clicks the button: The function is taken from the Web API environment and moved to the Callback Queue.</li>
      </ul>

      <h2>The Role of the Event Loop</h2>
      <p>The Event Loop's job is to continuously monitor both the Callback Queue and the Call Stack.</p>
      <ul>
        <li>It checks if the Call Stack is empty.</li>
        <li>If the stack is empty and there is a function ready in the Callback Queue, it "pushes" that function into the Call Stack for execution.</li>
      </ul>

      <h2>Why do we need a Callback Queue?</h2>
      <p>
        If a user clicks a button 100 times, those 100 callback functions need to be stored somewhere so they can be executed one by one in the order they occurred.
      </p>

      <blockquote>
        <strong>Important Note:</strong> The Event Loop will only take tasks from the Callback Queue or Microtask Queue once the whole global code execution is finished (the stack is empty). If there are too many tasks, it might take time to get to them.
      </blockquote>

      <h2>The Microtask Queue (Priority)</h2>
      <p>
        The fetch() function works a little differently. Because fetching data is considered very important, it is given higher priority than other callback functions.
      </p>
      <ul>
        <li>Instead of being stored in the Callback Queue, fetch callbacks (and Promises) are stored in the Microtask Queue.</li>
        <li>The Event Loop gives preference and priority to the Microtask Queue.</li>
        <li>The Rule: Once the Call Stack is empty, the Event Loop checks the Microtask Queue first. Only after all tasks in the Microtask Queue are completed will it move on to the tasks in the Callback Queue.</li>
      </ul>

      <h3>What goes where?</h3>
      <ul>
        <li><strong>Microtask Queue:</strong> All Promises and Mutation Observers.</li>
        <li><strong>Callback Queue (Task Queue):</strong> Everything else, such as setTimeout(), setInterval(), and DOM events (clicks, etc.).</li>
      </ul>
    </article>
  );
};

export default EventLoop;