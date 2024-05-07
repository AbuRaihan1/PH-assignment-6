const Container = ({ children }) => {
  return (
    <div className="h-auto w-full md:p-0 p-3 max-w-[1250px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
