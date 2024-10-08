import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrSearch } from "react-icons/gr";
import "tailwindcss/tailwind.css";
import logo from "../assest/logo1.jpg";
// import SummaryApi from "../common";
// import ROLE from "../common/role";
// import Context from "../context";
// import { RootState } from "../store";
// import { setUserDetails } from "../store/userSlice";

const Head = () => {
  // const user = useSelector((state) => state?.user?.user);

  // const user = useSelector((state: RootState) => state.user.user);
  // const dispatch = useDispatch();
  // const [menuDisplay, setMenuDisplay] = useState(false);
  // const context = useContext(Context);
  // const navigate = useNavigate();
  // const searchInput = useLocation();
  // const URLSearch = new URLSearchParams(searchInput?.search);
  // const searchQuery = URLSearch.getAll("q");
  // const [search, setSearch] = useState(searchQuery);

  // const handleLogout = async () => {
  //   const fetchData = await fetch(SummaryApi.logout_user.url, {
  //     method: SummaryApi.logout_user.method,
  //     credentials: "include",
  //   });

  //   const data = await fetchData.json();

  //   if (data.success) {
  //     toast.success(data.message);
  //     dispatch(setUserDetails(null));
  //     navigate("/");
  //   }

  //   if (data.error) {
  //     toast.error(data.message);
  //   }
  // };

  // const handleSearch = (e) => {
  //   const { value } = e.target;
  //   setSearch(value);

  //   if (value) {
  //     navigate(`/search?q=${value}`);
  //   } else {
  //     navigate("/search");
  //   }
  // };
  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className=" flex items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Company Logo"
              width={90}
              height={30}
              style={{ height: "40px" }}
            />
          </Link>
          <h1 className="ml-4 text-lg font-bold">E-site</h1>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
            // onChange={handleSearch}
            // value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">
            <div
              className="text-3xl cursor-pointer relative flex justify-center"
              // onClick={() => setMenuDisplay((preve) => !preve)}
            >
              {/* {user?.profilePic ? ( */}
              <Image
                src="/images/Television.jpg"
                alt="Description of your image"
                width={40}
                height={30}
                className="w-10 h-10 rounded-full"
              />
              ) : (
              <FaRegCircleUser />
              {/* )} */}
            </div>
            {/* {user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((preve) => !preve)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )} */}

            {/* {menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((preve) => !preve)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )} */}

            <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
              <nav>
                <Link
                  href="/admin-panel/all-products"
                  className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                >
                  Admin Panel
                </Link>
              </nav>
            </div>
          </div>

          {/* {user?._id && ( */}
          <Link href="/cart" className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>

            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">cart</p>
            </div>
          </Link>
          {/* )} */}

          <div>
            {/* {user?._id ? ( */}
            <button
              // onClick={handleLogout}
              className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
            ) : (
            <Link
              href="/Login/login"
              className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Login
            </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
