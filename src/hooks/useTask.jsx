import {QueryClient, useMutation, useQuery} from "@tanstack/react-query";
import {createTask, getTasks} from "../api/tasks";
import useAuth from "./useAuth";
const useTask = () => {
  const {user} = useAuth();
  const userMail = user?.email;
  const queryClient = new QueryClient();
  const {data: tasks} = useQuery({
    enabled: !!userMail,
    queryKey: ["tasks"],
    queryFn: async (userMail) => await getTasks(userMail),
  });

  const {mutateAsync: createTaskFn} = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    }
  });

  return {tasks, createTaskFn};

};

export default useTask;
