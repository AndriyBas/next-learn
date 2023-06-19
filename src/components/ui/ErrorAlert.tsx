const ErrorAlert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 m-4 w-[90%] max-w-[40rem] bg-[#d5bdfc] text-[#38028d] text-2xl text-center rounded-md">
      {children}
    </div>
  );
};

export default ErrorAlert;
