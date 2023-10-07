import background from "../../assets/nasa3.png";
import image1 from "./images/result1.jpeg";
import image2 from "./images/result2.jpeg";
import image3 from "./images/result3.jpeg";
import image4 from "./images/result4.jpeg";
import image5 from "./images/result5.jpeg";
import image6 from "./images/result6.jpeg";
const Analysis = () => {
  return (
    <div
      style={{ background: `url(${background})` }}
      className="relative h-screen !bg-no-repeat !bg-center !bg-cover "
    >
      <section className="max-w-screen-xl mx-auto py-10">
        <div className="bg-black px-10 opacity-90 rounded-t-2xl border-b-[1px] border-das pb-10">
          <p className="text-4xl font-semibold py-2 text-white pt-10">
            Exploratory Data Analysis
          </p>

          <p className="text-white text-justify text-xl mt-4">
            Weather forecasting is the application of science and technology to
            predict the conditions of the atmosphere for a given location and
            time.
          </p>

          <section className="my-10">
            <p className="text-white text-sm">
              Within our feature analysis, the visuals pinpoint a projected
              maximum temperature (Next_Tmax) of 30.27°, accompanied by a
              potential variance of +/- 3.12°. Concurrently, the anticipated
              minimum temperature (Next_Tmin) is slated at 22.930°, presenting a
              possible deviation of +/- 2.49°.
            </p>

            <div className="flex flex-col justify-center items-center gap-10 mt-10">
              <img src={image6}></img>
              <img src={image5}></img>
              <img src={image4}></img>
              <img src={image3}></img>
              <img src={image2}></img>
              <img src={image1}></img>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
