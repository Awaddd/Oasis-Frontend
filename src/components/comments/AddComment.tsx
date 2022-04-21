const AddComment = () => {
  return (
    <form className="flex flex-col gap-[0.4rem]">
      <textarea className="w-full p-2 border-2 border-black rounded" />
      <button className="self-end btn">Post</button>
    </form>
  );
};

export default AddComment;
