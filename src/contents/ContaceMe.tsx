const ContaceMe = () => {
  return (
    <div
      id="contact-me"
      className="flex justify-center min-w-full min-h-fit scroll-mt-16"
    >
      <div className="container flex flex-col gap-4 p-4">
        <h2 className="text-xl font-semibold">Contace Me</h2>

        <div className="flex flex-wrap justify-center w-full gap-4">
          <div className="flex flex-col flex-grow max-w-md gap-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full p-2 border rounded-lg bg-slate-950 border-violet-600 indent-2"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col flex-grow max-w-md gap-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full p-2 border rounded-lg bg-slate-950 border-violet-600 indent-2"
              placeholder="Enter your last name"
            />
          </div>

          <div className="flex flex-col flex-grow max-w-md gap-2">
            <label htmlFor="gmail">Your Gmail</label>
            <input
              type="email"
              name="gmail"
              className="w-full p-2 border rounded-lg bg-slate-950 border-violet-600 indent-2"
              placeholder="Enter your gmail here"
            />
          </div>
        </div>

        <div className="flex justify-center w-full gap-4">
          <div className="flex flex-col flex-grow gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows={10}
              className="w-full p-2 border rounded-lg bg-slate-950 border-violet-600 indent-2"
              placeholder="Enter your message here"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse w-full">
          <button className="px-4 py-2 transition-all rounded-lg cursor-pointer active:scale-110 bg-violet-500 hover:bg-violet-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContaceMe;
