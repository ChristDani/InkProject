const Card = ({ icon, text }: { icon: JSX.Element, text: string }) => {

  return (
    <>
      <div className="bg-white p-6 rounded-[40px] shadow-md flex-none h-[465px] w-[450px]" >
        <div className="text-center mb-4">
          <div className=" text-white pt-6 my-8 rounded-full inline-block h-[96px] w-[96px] text-center">
            {icon}
          </div>
        </div>
        <p className="text-gray-700 mt-10 pt-10 text-center">
          {text}
        </p>
      </div>
    </>
  )
}

export default Card