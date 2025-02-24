import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
 import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
 import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Link, useNavigate, useNavigation } from "react-router-dom";
function Header() {
    const [openDialog, setOpenDialog] = useState(false);
 
  const user = JSON.parse(localStorage.getItem("user"));
   useEffect(() => {
    
   })
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
         localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false); 
        window.location.reload();
      });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >   
      <img
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        style={{ flexShrink: 0, backgroundColor: "transparent" }}
 
      />   
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            <a href="/my-trips" className="text-black">
              <Button variant="outline" className="rounded-full">
                My trips
              </Button>
            </a> 
            <a href="/create-trip" className="text-black">
              <Button variant="outline" className="rounded-full">
                Create trip
              </Button>
            </a>
            <Popover>
              <PopoverTrigger style={{ backgroundColor: "transparent" }}>
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            onClick={() => setOpenDialog(true)}
            style={{ marginLeft: "1rem" }}
          >
            Sign in
          </Button>
        )}
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img className="w-20 h-20 " src="/logo.png" />
              <h2 className="font-bold mt-7 text-lg">Sign in with Google</h2>
              <p>Sign in to the app with Google authentication</p>
              <Button
                className="w-full mt-5 flex gap-4 items-center"
                onClick={login}
              >
                <FcGoogle className="h-7 w-7" /> Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
