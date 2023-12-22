import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const AddTask = () => {

    const axiosPublic = useAxiosPublic();
    // const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axiosPublic.post('/task', data)
            .then((res) => {
                if (res.data.insertedId) {
                    console.log('created');
                    reset();
                    Swal.fire({
                        title: "Task added",
                        text: "Task created successfully!",
                        icon: "success",
                    });
                }
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
                alert('An error occurred. Please try again later.');
            });

    }

  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body px-10">
                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input type="text" {...register("title", { required: true })} placeholder="Task title" className="input input-bordered" />
                    {errors.title && <span className="text-red-600">title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" {...register("date", { required: true })} placeholder="Date" className="input input-bordered" />
                    {errors.title && <span className="text-red-600">Date is required</span>}
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>
                    <input type="text" {...register("prority", { required: true })} placeholder="priority" className="input input-bordered" />
                    {errors.price && <span className="text-red-600">priority required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    {handleSubmit(onSubmit)}
                    <textarea rows={6} className="border" {...register("Details", { required: true })} />
                    {errors.textarea && <span className="text-red-600">details is required</span>}
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;