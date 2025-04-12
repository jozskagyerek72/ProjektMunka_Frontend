export const QR = () => {
  return (
    <div className="flex flex-col rounded-2xl w-full md:w-140 h-auto justify-center items-center bg-gray-800 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02] p-6">
      <h2 className="text-3xl text-center text-white mb-6 gambetta font-semibold">How to enter?</h2>
      <div className="w-full mb-6">
        <video className="w-full rounded-lg" muted loop autoPlay controls={false}>
          <source src="/qr.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-center text-white mb-6">
        QR authentication provides secure workplace entry.
      </p>
    </div>
  );
};
