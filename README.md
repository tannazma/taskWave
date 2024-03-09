### About Task Wave

It is a simple Task Manager application, where you will implement core functionalities using TypeScript, React for the frontend, Express for the backend API, and Prisma as your ORM for database operations. The app will allow users to create, view, update, and delete tasks. Each task will have a title, description, status (e.g., "todo", "in progress", "done"), and a due date.

### Backend Setup (Express + Prisma)

**Model:**
- Define a Task model in your Prisma schema.
```prisma
model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  status      String
  dueDate     DateTime?
}
```

**API Endpoints:**
1. `GET /tasks` - Retrieve all tasks.
2. `GET /tasks/:id` - Retrieve a single task by ID.
3. `POST /tasks` - Create a new task.
4. `PUT /tasks/:id` - Update an existing task.
5. `DELETE /tasks/:id` - Delete a task.

**Prisma Setup:**
- Use Prisma Client in your Express routes to interact with the database according to the endpoints defined.

### Frontend Setup (React)

**State Management:**
- Use React state and effects to manage and display tasks.

**Components:**
1. `TaskForm` - For adding and updating tasks.
2. `TaskList` - To display all tasks.
3. `TaskItem` - To display a single task within `TaskList`, including options to edit or delete.

**Features to Implement:**

1. **Display All Tasks:**
   - Fetch and display all tasks in `TaskList` upon component mount.

2. **Add a Task:**
   - Use `TaskForm` to submit a new task. Send a POST request to the backend, then refresh the task list.

3. **Update a Task:**
   - In `TaskItem`, add an "Edit" button that populates `TaskForm` with the task's existing data. On submit, send a PUT request to the backend, then refresh the task list.

4. **Delete a Task:**
   - In `TaskItem`, add a "Delete" button that sends a DELETE request to the backend to remove the task, then refresh the task list.

5. **Filter/Sort Tasks:**
   - Implement functionality to filter tasks by status and sort by due date.

### Steps for Completion:

1. **Set Up Your Project:**
   - Initialize a new TypeScript project with a React frontend and an Express backend.
   - Install necessary dependencies, including Prisma and its CLI.

2. **Database Configuration:**
   - Set up your database and configure Prisma to connect to it.
   - Run the Prisma migration to create your `Task` table.

3. **Implement Backend Logic:**
   - Set up Express routes to handle CRUD operations.
   - Use Prisma Client in your route handlers to interact with the database.

4. **Build Frontend Components:**
   - Create React components (`TaskForm`, `TaskList`, `TaskItem`).
   - Implement state management and hooks to fetch from and interact with your backend.

5. **Connect Frontend with Backend:**
   - Use fetch API or Axios in React to make HTTP requests to your Express backend.

6. **Testing:**
   - Manually test your application by creating, updating, and deleting tasks. Ensure the frontend reflects these changes accurately.

7. **Refinement and Debugging:**
   - Refine the UI/UX and debug any issues.
