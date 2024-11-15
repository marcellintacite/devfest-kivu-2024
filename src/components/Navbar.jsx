import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Link, useNavigate } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";

function NavItem({ label }) {
  return (
    <a href="#">
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="About Us" />
      <NavItem label="Pricing" />
      <NavItem label="Contact Us" />
    </ul>
  );
}

export function NavbarWithSimpleLinks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const navigate = useNavigate();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const handleLink = (path) => {
    window.open(path, "_blank");
  };

  return (
    <Navbar color="white" fullWidth className="shadow-sm ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="md:h-12 h-9" />
        </Link>

        <Button
          color="amber"
          className=""
          onClick={() =>
            handleLink(
              "https://gdg.community.dev/events/details/google-gdg-kivu-presents-devfest-kivu-2024/"
            )
          }
        >
          <p className="hidden gap-3 items-center lg:flex">
            Reserver un ticket Ticket <LinkIcon className="h-4 w-4" />
          </p>
          <p className="flex items-center gap-2 lg:hidden">
            <Link to={"/dp-generator"}></Link>
            Get ticket <LinkIcon className="h-4 w-4" />
          </p>
        </Button>
      </div>
    </Navbar>
  );
}

export default NavbarWithSimpleLinks;
