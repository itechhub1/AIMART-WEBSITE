const loading = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
        <img src={require("../assets/loading.gif").default} alt="aimart loading" style={{width:50,objectFit:"cover"}} />
        <p className="text-center mt-4">Fetching Data...</p>
    </div>
  );
};

export default loading;
