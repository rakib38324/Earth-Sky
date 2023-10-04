import Loading from '../../Common/Loading/Loading';
import SmallLoading from '../../Common/SmallLoading/SmallLoading';
import background from '../../assets/nasa4.jpg'
const Analysis = () => {
   
    return (
        <div style={{ background: `url(${background})` }}
            className="relative h-screen !bg-no-repeat !bg-center !bg-cover"
        >
           <p className='text-4xl font-bold text-white ml-10'>Analysis</p>
           <SmallLoading></SmallLoading>
           <Loading></Loading>
        </div>
    );
};

export default Analysis;