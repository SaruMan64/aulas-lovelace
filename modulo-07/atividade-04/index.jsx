export function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const el = React.createElement;

  async function signOut() {
    const response = await deleteCookie();
    if (response.status !== 400) {
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getUserInfo();
      if (response.status !== 400) {
        setUser(response);
      }
    }
    fetchData();
  }, []);

  return el(
    "div",
    { className: "home" },
    el("h1", null, "Profile"),
    el(
      "div",
      { className: "current-profile" },
      el(
        "div",
        { className: "home-photo" },
        user.file
          ? el("img", { src: user.file, alt: "profile" })
          : el(MdAccountCircle, {
              fontSize: "100px",
              className: "material-icons",
            })
      ),
      el("div", { className: "home-name" }, user.name),
      el("div", { className: "home-email" }, user.email),
      el("div", { className: "home-date" }, user.date),
      el(
        "button",
        {
          type: "button",
          className: "edit",
          onClick: () => navigate("/editprofile"),
        },
        "Edit profile"
      ),
      el(
        "button",
        { type: "button", className: "edit", onClick: () => signOut() },
        "Sign out"
      )
    )
  );
}