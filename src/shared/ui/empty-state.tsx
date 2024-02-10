export const EmptyState = () => {
  return (
    <div
      className="
        px-4 
        py-10 
        sm:px-6 
        lg:px-8 
        h-screen 
        flex 
        justify-center 
        items-center
      bg-slate-100 
      dark:bg-slate-900
        "
      >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Виберіть чат або почніть нову розмову
        </h3>
      </div>
    </div>
  );
};
