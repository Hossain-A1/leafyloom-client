import {BounceLoader } from "react-spinners";
interface LoadingProps {
  isLoading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center items-center '>
      <BounceLoader color="#36d7b7"
        size='82px'
        loading={isLoading}
        aria-label='Loading spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loading;