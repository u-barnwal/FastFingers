import React from "react";
import Text from "../../../../components/Text";

import Button from "./../../../../components/Button";

import imgUser from "./../../../../assets/images/defaultUser.png";
import { Link } from "react-router-dom";

function LeftContainer() {
  return (
    <div className="lg:pr-0 p-10 pb-0">
      <div className="rounded-xl bg-primary p-5 flex items-center flex-col justify-center">
        <img src={imgUser} alt="" className="w-16 h-16 object-cover" />
        <Text size="lg" align="center" bold className="my-4 uppercase">
          Utsav Barnwal
        </Text>
        <Link to="/">
          <Button brand="error" color="white">
            Quit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LeftContainer;
