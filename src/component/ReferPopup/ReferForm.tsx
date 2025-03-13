import { useEffect, useRef } from "react";

function ReferForm(props: { open: boolean; setOpen: () => void, setSuccess: () => void }) {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      props.setOpen();
    }
  };

  useEffect(() => {
    if(props && props.open){
      document.body.style.overflow = 'hidden'
    }
    else
     document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = '';
    }
  }, [props.open])

  if (!props.open) return null;
  return (
    <div
      className="fixed top-0 right-0 w-full h-screen bg-black/60 backdrop-blur-3xl flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        className="bg-white py-8 rounded-lg overflow-hidden w-1/2"
        ref={formRef}
      >
        <div className="px-8 pb-3">
          <h1 className="text-2xl font-medium">Refer a friend and earn</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            eius sapiente magnam nemo rem deserunt totam dolore est aperiam id.
          </p>
        </div>
        <form action="" className="mt-3 w-full flex flex-col gap-3 px-8" onSubmit={(e) => {
          e.preventDefault();
          props.setSuccess();
          props.setOpen();
        }}>
          <div className="w-full">
            <label htmlFor="name" className="text-sm pb-2">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., John, joe"
            />
            <p className="text-xs text-gray-300">Enter your friend's name</p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., today@imhappy.com"
            />
            <p className="text-xs text-gray-300">Enter your friend's email</p>
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-sm">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., +91 1234567890"
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="Message"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 pt-2 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., Hey!!"
              rows={3}
            />
          </div>
          {/* <div className="w-full">
            <label htmlFor="" className="text-sm font-medium">Generate Code</label>
            <div className="flex items-center gap-5">
              <div className="flex items-center rounded-lg overflow-hidden border border-gray-300 w-fit">
                <span className="px-5">
                  <i className="fi fi-rr-ticket flex items-center"></i>
                </span>
                <input type="text" className="outline-none h-10 text-sm" />
              </div>
              <button className="bg-green-300 py-2 px-4 rounded-lg">Create code</button>
            </div>
          </div> */}
          <div className="flex gap-5">
            <button
              className="w-1/4 bg-white border border-gray-300 py-2 rounded-lg mt-5 cursor-pointer hover:bg-gray-100 transition-all hover:-translate-y-0.5"
              onClick={props.setOpen}
            >
              Close
            </button>
            <button className="w-full bg-[#2160ad] text-white  py-2 rounded-lg mt-5 cursor-pointer hover:-translate-y-0.5 transition-all" onClick={() => {
              props.setOpen();
              props.setSuccess();
            }}>
              Send Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReferForm;
