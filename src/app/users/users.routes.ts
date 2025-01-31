import { Routes } from "@angular/router";
import { resolveTitle, resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";

export const userRoutes: Routes = [
    {
      path: '',
      redirectTo: 'tasks',
      pathMatch: 'full',
    },
    {
      path: 'tasks',
      component: TasksComponent,
      runGuardsAndResolvers: 'always',
      resolve: {
        userTasks: resolveUserTasks,
      },
      title: resolveTitle
    },
    {
      path: 'tasks/new',
      component: NewTaskComponent,
      canDeactivate: [canLeaveEditPage]
    },
  ]