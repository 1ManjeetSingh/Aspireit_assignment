<h1>Aspireit-Full Stack Developer Task</h1>

<p>This is a full-stack web application that provides JWT-based authentication and manages attendance data. The backend is built using <strong>Node.js</strong> and <strong>Express</strong>, connected to <strong>MongoDB</strong> for database storage. The frontend is created using <strong>React</strong> to provide a user interface to interact with the backend APIs.</p>
<p>GitHub Repository: <a href="https://github.com/1ManjeetSingh/Aspireit_assignment">https://github.com/1ManjeetSingh/Aspireit_assignment</a></p>
<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#project-setup">Project Setup</a>
        <ul>
            <li><a href="#backend-setup">Backend Setup</a></li>
            <li><a href="#frontend-setup">Frontend Setup</a></li>
        </ul>
    </li>
    <li><a href="#api-routes">API Routes</a></li>
    <li><a href="#authentication-process">Authentication Process</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
</ul>
<h2 id="features">Features</h2>
<ul>
    <li>User registration and login system with JWT-based authentication.</li>
    <li>Protected API routes to secure access to sensitive data.</li>
    <li>Attendance management: retrieve current attendance and weekly attendance records.</li>
    <li>Frontend includes a theme toggle.</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>

<h3>Backend</h3>
<ul>
    <li><strong>Node.js</strong></li>
    <li><strong>Express.js</strong></li>
    <li><strong>MongoDB</strong> with <strong>Mongoose</strong> for data modeling</li>
    <li><strong>JWT (JSON Web Token)</strong> for authentication</li>
</ul>

<h3>Frontend</h3>
<ul>
    <li><strong>React.js</strong></li>
    <li><strong>Axios</strong> for API calls</li>
    <li><strong>React Router</strong> for navigation</li>
</ul>

<h2 id="project-setup">Project Setup</h2>

<h3 id="backend-setup">Backend Setup</h3>
<ol>
    <li><strong>Clone the repository</strong>:
        <pre><code>git clone https://github.com/1ManjeetSingh/Aspireit_assignment.git
        </code></pre>
    </li>
  <li><strong>Navigate to the backend directory</strong>:
        <pre><code>cd backend
        </code></pre>
    </li>
    <li><strong>Install dependencies</strong>:
        <pre><code>npm install
        </code></pre>
    </li>
    <li><strong>Run the backend server</strong>:
        <pre><code>node index.js
        </code></pre>
        <p>This will start the backend server on <code>http://localhost:5000</code>.</p>
    </li>
</ol>
<h3 id="frontend-setup">Frontend Setup</h3>
<ol>
    <li><strong>Navigate to the frontend directory</strong>:
        <pre><code>cd my-app
        </code></pre>
    </li>
    <li><strong>Install frontend dependencies</strong>:
        <pre><code>npm install
        </code></pre>
    </li>
    <li><strong>Start the frontend server</strong>:
        <pre><code>npm start
        </code></pre>
        <p>The frontend will run on <code>http://localhost:3000</code>.</p>
    </li>
</ol>
<h2 id="api-routes">API Routes</h2>

<h3>Authentication Routes</h3>
<ul>
    <li><strong>POST</strong> <code>/api/auth/register</code> - Register a new user.</li>
    <li><strong>POST</strong> <code>/api/auth/login</code> - Log in and receive a JWT token.</li>
</ul>

<h3>Attendance Routes (Protected)</h3>
<ul>
    <li><strong>GET</strong> <code>/api/attendance</code> - Get the current attendance.</li>
    <li><strong>GET</strong> <code>/api/attendance/:week</code> - Get attendance for a specific week.</li>
</ul>

<h3>Other Routes (Example)</h3>
<ul>
    <li><strong>GET</strong> <code>/api/children/:year</code> - Fetch children data for a specific year (protected).</li>
</ul>

<h2 id="authentication-process">Authentication Process</h2>

<ol>
    <li><strong>User Registration</strong>:
        <p>Use Postman or any HTTP client to register a new user at <code>/api/auth/register</code> by sending a <code>POST</code> request with <code>username</code> and <code>password</code> in the body.</p>
    </li>
    <li><strong>Login</strong>:
        <p>Log in using <code>/api/auth/login</code> to receive a JWT token.</p>
    </li>
    <li>
      <p>To protect the API endpoints and ensure only authenticated users can access them, we have implemented JWT-based authentication middleware. The following line of code, when uncommented, will enforce authentication on all API routes under the <code>/api</code> path:</p>
      <pre><code>app.use('/api', authenticateJWT);</code></pre>
      <p>Once activated, every request to routes starting with <code>/api</code> will require a valid JWT token to be included in the <code>Authorization</code> header. The token is typically provided after successful login.</p>
      <p><b>To test the application without the authentication process, this line can be commented out, allowing unrestricted access to the API endpoints.</b></p>
    </li>
</ol>
<h2 id="project-structure">Project Structure</h2>

<pre><code>/backend
  /config
    db.js
  /middlewares
    auth.js
  /models
    User.js
    Attendance.js
    Caregivers.js
    Children.js
    Enrollments.js
    Financial.js
  /routes
    auth.js
    attendance.js
    caregivers.js
    children.js
    enrollments.js
    financial.js
  .env
  index.js

/frontend
  /src
    App.css
    App.js
  ...
  index.js
  README.md
</code></pre>
