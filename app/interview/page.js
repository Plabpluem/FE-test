"use client";
import { useEffect, useState } from "react";

const Interview = () => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://api-phd-dashboard-v2.riseimpact.co/api/v2/participant",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const useData = data.find(
    (item) => item.firstname === "จักร" && item.lastname === "โกศัลยวัตร"
  );
  return (
    <main className="h-screen bg-white text-black">
      {useData && (
        <div className="py-8 fontIBM w-[800px] h-auto m-auto flex justify-center gap-28 items-start colorTheme">
          <div>
            <div className="w-[120px] h-[120px] bg-gray-300 rounded-[50%]"></div>
            <h2 className="mt-5 text-gray-800 text-xl font-normal">
              {useData.name_title}
              {useData.firstname} {useData.lastname}
            </h2>
            <h3 className="mt-5 text-xl font-semibold">{useData.status}</h3>
          </div>
          <div className="flex flex-col items-start text-lg gap-4 font-medium">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6"
              >
                <path
                  fill="#404040"
                  d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                />
              </svg>
              <h3>{useData.job_title}</h3>
              <h3>{useData.organization}</h3>
            </div>
            <div>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#404040"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <h3>{useData.email}</h3>
            </div>
            <div>
              <h5 className="text-gray-700 text-base font-semibold">Mentor</h5>
              <div className="flex text-base items-center ">
                <div className="bg-gray-300 w-[30px] h-[30px] rounded-[50%]"></div>
                <h3 className="ml-2 font-medium">{useData.mentor_1} </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Interview;
