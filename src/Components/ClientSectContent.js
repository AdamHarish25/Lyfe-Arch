import { useEffect } from "react";
import AOS from "aos";
import {
  AmazonSquareFilled,
  DropboxSquareFilled,
  FacebookFilled,
  GithubFilled,
  GoogleOutlined,
  GooglePlusSquareFilled,
  TwitterCircleFilled,
  WindowsFilled,
} from "@ant-design/icons";

export default function ClientSectContent() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-screen h-80 overflow-y-auto md:h-auto place-items-center gap-4 my-10 px-10">
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <GoogleOutlined className="text-4xl" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <FacebookFilled className="text-4xl text-blue-600" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <AmazonSquareFilled className="text-4xl" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <TwitterCircleFilled className="text-4xl text-blue-500" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <GithubFilled className="text-4xl" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <DropboxSquareFilled className="text-4xl text-blue-500" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <WindowsFilled className="text-4xl text-blue-500" />
          </div>
        </div>
      </div>
      <div className="h-36 w-60 lg:w-full flex justify-center items-center border">
        <div>
          <h1 className="font-Poppins font-normal text-center text-base">
            Client Name
          </h1>
          <div className="flex justify-center items-center w-full h-auto my-3">
            <GooglePlusSquareFilled className="text-4xl text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
