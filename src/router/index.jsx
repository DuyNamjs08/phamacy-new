import Pages from "../page/index";
const TRANG_CHU = "/";
const GIOI_THIEU = "/gioi-thieu";
const LIEN_HE = "/lien-he";
const SAN_PHAM = "/san-pham";
// const CONNECT = "/connect";
// const INTRO = "/intro";
// const BENH_NHAN = "/benh-nhan";
// const DON_THUOC = "/don-thuoc";

const RouterWeb = [
  {
    id: 1,
    path: TRANG_CHU,
    role: ["1", "2", "3"],
    component: <Pages.HomePage />,
  },
  {
    id: 2,
    path: GIOI_THIEU,
    component: <Pages.IntroPage />,
    role: ["1", "2", "3"],
  },
  {
    id: 3,
    path: SAN_PHAM,
    role: ["1", "2", "3"],
    component: <Pages.ProductOutlet />,
    child: [
      {
        path: "",
        component: <Pages.ProductPage />,
      },
      {
        path: ":id",
        component: <Pages.ProductDetailPage />,
      },
    ],
  },
  //   {
  //     id: 4,
  //     path: BLOG,
  //     role: ["1", "2"],
  //     component: <Pages.BillTotals />,
  //     child: [
  //       {
  //         path: "",
  //         component: <Pages.Blog />,
  //       },
  //       {
  //         path: ":id",
  //         component: <Pages.BlogDetails />,
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     path: CONNECT,
  //     role: ["1", "2"],
  //     component: <Pages.Connect />,
  //   },
  //   {
  //     id: 6,
  //     path: INTRO,
  //     role: ["1"],
  //     component: <Pages.Intro />,
  //   },
  { id: 7, role: ["1", "2"], path: LIEN_HE, component: <Pages.ContactPage /> },
  //   { id: 8, path: DON_THUOC, role: ["3"], component: <Pages.Pamacy /> },
];

export default RouterWeb;
