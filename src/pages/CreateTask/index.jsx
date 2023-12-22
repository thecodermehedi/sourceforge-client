import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import useTask from "../../hooks/useTask";
import useAuth from "../../hooks/useAuth";

const CreateTask = () => {
  const {createTaskFn} = useTask();
  const {user} = useAuth();
  const {register, handleSubmit, reset} = useForm();
  const handleCreateTask = async (data) => {
    const toastId = toast.loading("Creating task...");
    const {title, priority, date, desc} = data;
    const deadline = date.split("-").reverse().join("-");
    const task = {title, priority, deadline, desc, email: user?.email};
    console.log(task);
    try {
      await createTaskFn(task);
      toast.success("Task created", {id: toastId});
      reset();
    } catch (error) {
      toast.error(error.message, {id: toastId});
    }
  };
  return (
    <section className="h-96 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleCreateTask)}
        className="w-full md:w-1/2 grid grid-cols-1 gap-4 p-10"
      >
        <input
          type="text"
          id="title"
          name="title"
          {...register("title", {required: true})}
          className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
          placeholder="Title"
          required
        />
        <select
          id="priority"
          name="priority"
          {...register("priority", {required: true})}
          className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
          defaultValue={""}
          required
        >
          <option value="" disabled>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
        <div onClick={() => document.getElementById("date").focus()}>
          <input
            type="date"
            id="date"
            name="date"
            {...register("date", {required: true})}
            className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
            defaultValue={new Date().toISOString().slice(0, 10)}
            required
          />
        </div>
        <textarea
          id="desc"
          name="desc"
          {...register("desc", {required: true})}
          className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm resize-none"
          rows={4}
          placeholder="Description"
          required
        />

        <button
          type="submit"
          className="mt-2 px-4 py-2 text-white bg-black w-full hover:rounded-lg shadow"
        >
          Create
        </button>
      </form>
    </section>
  );
};

export default CreateTask;
