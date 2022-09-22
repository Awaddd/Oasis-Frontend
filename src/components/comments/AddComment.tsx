const AddComment = () => {
  return (
    <form className="flex flex-col gap-[0.4rem]">
      <textarea className="w-full p-2 border border-gray-300 rounded" rows={4} />
      <button className="btn-flex md:self-end md:mt-[0.1rem] min-h-8 px-8 py-[0.4rem] font-medium">Add Comment</button>
    </form>
  );
};

export default AddComment;
