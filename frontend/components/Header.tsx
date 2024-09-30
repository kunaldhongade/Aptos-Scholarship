import { buttonVariants } from "@/components/ui/button";
import { IS_DEV } from "@/constants";
import { Link } from "react-router-dom";
import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap">
      <h1 className="display">
        <Link to="/" style={{ fontFamily: "unset" }}>
          Aptos Scholarships
        </Link>
        {/* <Link to="/">{title}</Link> */}
      </h1>

      <div className="flex gap-2 items-center flex-wrap">
        {IS_DEV && (
          <>
            <Link className={buttonVariants({ variant: "link" })} to={"/Create-Scholarship"}>
              Create Scholarship
            </Link>
            <Link className={buttonVariants({ variant: "link" })} to={"/Apply"}>
              Apply for Scholarship
            </Link>
          </>
        )}
        <WalletSelector />
      </div>
    </div>
  );
}