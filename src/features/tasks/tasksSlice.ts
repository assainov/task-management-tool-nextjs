/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'services/redux/createAppSlice';
import { Task } from '@/types/tasks.types';
import { fetchTasks } from './tasksApi';

export interface TasksSliceState {
  tasks: Task[];
  status: 'initial' | 'idle' | 'loading' | 'failed';
}

const initialState: TasksSliceState = {
  tasks: [],
  status: 'initial',
};

export const tasksSlice = createAppSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    updateTasks: create.reducer(
      (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
      },
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(fetchAsync())`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    fetchAsync: create.asyncThunk(
      async () => {
        const tasks = await fetchTasks();
        // The value we return becomes the `fulfilled` action payload
        return tasks;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.tasks = action.payload.tasks;
        },
        rejected: (state) => {
          state.status = 'failed';
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectTasks: (state) => state.tasks,
    selectStatus: (state) => state.status,
  },
});

// Action creators are generated for each case reducer function.
export const { fetchAsync, updateTasks } = tasksSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectTasks, selectStatus } = tasksSlice.selectors;
