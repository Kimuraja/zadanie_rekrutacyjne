import errorImage from '/errorImage.svg'

const Error = ({ error }: { error?: string | null | Error }) => {
  return (
    <div className="flex justify-center items-center flex-col my-[5rem]">
      <img src={errorImage} alt="Error Image" />
      <h1 className="text-[#fff] text-[5rem]">{error?.toString()}</h1>
    </div>
  )
}

export default Error